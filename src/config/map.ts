/**
 * Career map settings. Change what the map shows here; the places themselves live in
 * src/content/data/pins.yaml (add `hidden: true` to a place or to one entry to hide it).
 */
export const mapConfig = {
  /**
   * The layer buttons above the map, in order. Every entry in pins.yaml has a `layer` that must match an id here.
   *   label  text on the button
   *   tag    small tag shown next to each entry in the details box
   *   color  CSS color of that tag
   *   on     true = switched on when the page loads
   *   show   false = remove the layer (its button and every entry that uses it)
   */
  layers: [
    { id: 'work', label: 'Work', tag: 'Work', color: 'var(--c-bi)', on: true, show: true },
    { id: 'education', label: 'Study', tag: 'Study', color: 'var(--c-edu)', on: true, show: true },
    { id: 'projects', label: 'Remote projects', tag: 'Remote project', color: 'var(--c-research)', on: true, show: true },
  ],

  /** The pin selected when the page loads (an id from pins.yaml). */
  startPin: 'vancouver',

  /** Places of kind "data" (where a remote project's data comes from, e.g. London). */
  showDataPins: true,
  /** Lines between places: "move" = relocation, "remote" = project built remotely. */
  showMoveLines: true,
  showRemoteLines: true,
  /** The "Built remotely" list under the map. */
  showRemoteStrip: true,
  /** The legend under the map. */
  showLegend: true,
  /** Show the place name next to every pin (false = only next to the selected one). */
  alwaysShowLabels: false,
};
