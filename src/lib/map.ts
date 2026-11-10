import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import world from 'world-atlas/countries-110m.json';

/**
 * Builds the career map at build time, so the page ships plain SVG paths and no map library.
 * Base geometry: Natural Earth via the "world-atlas" package (public domain).
 */

export interface MapPoint {
  id: string;
  lon: number;
  lat: number;
}

const W = 1000;
const PAD = 10;

export function buildMap(points: MapPoint[]) {
  const topo = world as unknown as Topology<{
    land: GeometryCollection;
    countries: GeometryCollection;
  }>;

  // Frame the habitable world: crop Antarctica and the far Arctic.
  const frame = {
    type: 'MultiPoint' as const,
    coordinates: [
      [-180, 80],
      [180, 80],
      [180, -56],
      [-180, -56],
    ],
  };
  const projection = geoNaturalEarth1().fitWidth(W - PAD * 2, frame);
  const probe = geoPath(projection).bounds(frame);
  const [[x0, y0], [, y1]] = probe;
  const [tx, ty] = projection.translate();
  projection.translate([tx - x0 + PAD, ty - y0 + PAD]);
  const H = Math.ceil(y1 - y0 + PAD * 2);
  projection.clipExtent([
    [0, 0],
    [W, H],
  ]);

  const path = geoPath(projection);
  const land = path(feature(topo, topo.objects.land)) ?? '';
  const borders = path(mesh(topo, topo.objects.countries, (a, b) => a !== b)) ?? '';
  const graticule = path(geoGraticule10()) ?? '';

  const byId = new Map(points.map((p) => [p.id, p]));
  const placed = points.map((p) => {
    const xy = projection([p.lon, p.lat]) ?? [0, 0];
    return { id: p.id, x: xy[0], y: xy[1], left: (xy[0] / W) * 100, top: (xy[1] / H) * 100 };
  });

  const arc = (fromId: string, toId: string): string => {
    const a = byId.get(fromId);
    const b = byId.get(toId);
    if (!a || !b) return '';
    return (
      path({
        type: 'LineString',
        coordinates: [
          [a.lon, a.lat],
          [b.lon, b.lat],
        ],
      }) ?? ''
    );
  };

  return { width: W, height: H, land, borders, graticule, placed, arc };
}
