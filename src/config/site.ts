/**
 * Site-wide settings. This is the file you edit most often.
 * Everything else (projects, experience, skills, map pins, credentials)
 * lives in src/content/ and is validated at build time.
 */
export const site = {
  name: 'Andres Camilo Viloria Garcia',
  shortName: 'Andres Viloria',
  initials: 'AV',

  /** LinkedIn headline (Profile.pdf). Used as the page <title> suffix and in structured data. */
  headline:
    'Business Intelligence | Power BI & Microsoft Fabric | Data Modeling, ETL, DAX, SQL & Python | Turning Complex Data into Trusted Decisions',

  eyebrow: 'Business Intelligence · Analytics Engineering · Data',
  lead: 'I build the data foundations and dashboards that help teams make clearer, faster decisions.',
  intro:
    'I work across the whole BI lifecycle: understanding what stakeholders need, integrating and modeling the data, building the dashboards and helping people adopt them. My path runs from glass-plant production data to research platforms and healthcare analytics, and now to Microsoft Fabric and Power BI.',

  /** Short "problem → fix" chips shown in the hero. Each is backed by a resume bullet (see docs/SOURCE_MAP.md). */
  problems: [
    'Scattered sources → one governed model',
    'Manual reporting → automated pipelines',
    'Conflicting KPIs → shared definitions',
    'Dashboards nobody opens → adoption',
  ],

  /** Roles shown as "Open to". Edit once you decide your target roles. */
  targetRoles: ['BI Developer', 'Analytics Engineer', 'Data Analyst', 'Data Engineer'],

  location: 'Vancouver, Canada',
  workArrangement: 'Remote',

  email: 'andresvdata@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/andrescol/',
    github: 'https://github.com/andresvdata',
  },

  /**
   * Paste your Google Drive (or any public) resume link here.
   * Tip: in Drive choose Share → "Anyone with the link" → Viewer, then paste the URL.
   * While this is empty the site shows a visible "add resume link" placeholder.
   */
  resumeUrl: '',

  /** URL of the GitHub repository that holds this site (shown in the footer). Fill in after you create it. */
  repoUrl: '',

  /** Used for <meta name="description"> and social cards. */
  description:
    'Portfolio of Andres Camilo Viloria Garcia, a Vancouver-based Business Intelligence developer working with Power BI, Microsoft Fabric, SQL, Python and data modeling. Case studies in data integration, analytics engineering and forecasting.',
} as const;

export type Site = typeof site;
