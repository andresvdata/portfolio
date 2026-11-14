/**
 * The "focus" filter on the home page: lets a recruiter or hiring manager keep only the evidence that matters to them.
 *
 * Everything below is plain data, so it is easy to edit:
 *  - `topics`  are the kinds of work a reader can ask for. Every highlight, story chapter, role, case study,
 *              smaller project and skill row carries one to three topic ids (field `topics`).
 *  - `roles`   are shortcuts: choosing a role switches on a set of topics (and optionally tools).
 *  - `tools`   are the tool chips, in `toolGroups`. An item matches a tool when its text matches an alias.
 *
 * To add a topic or tool, add it here; to tag new content, set `topics` in its file (see docs/ADD_CONTENT.md).
 */

export const topics = [
  { id: 'reporting', label: 'Dashboards & reporting' },
  { id: 'modeling', label: 'Data modeling & warehousing' },
  { id: 'pipelines', label: 'ETL & data pipelines' },
  { id: 'analysis', label: 'Analysis, forecasting & ML' },
  { id: 'cloud', label: 'Cloud & platforms' },
  { id: 'practice', label: 'Requirements, quality & governance' },
  { id: 'research', label: 'Research & publications' },
] as const;

export type TopicId = (typeof topics)[number]['id'];
export const topicIds = topics.map((t) => t.id) as [TopicId, ...TopicId[]];

/**
 * Roles are shortcuts. Choosing one switches on its `topics` and, if set, its `tools`.
 * An item is shown when it matches one of the topics AND (when tools are set) one of the tools.
 */
export const roles = [
  {
    id: 'bi-developer',
    label: 'BI Developer',
    topics: ['reporting', 'modeling', 'practice'],
    tools: [],
    blurb: 'Dashboards and reporting, semantic and dimensional models, KPI definitions and adoption.',
  },
  {
    id: 'power-bi-developer',
    label: 'Power BI / Fabric Developer',
    topics: ['reporting', 'modeling', 'pipelines', 'practice'],
    tools: ['power-bi', 'dax', 'fabric', 'power-automate', 'power-apps', 'security'],
    blurb: 'Power BI and Microsoft Fabric end to end: Dataflow Gen2, Lakehouse, semantic models, DAX, security and deployment.',
  },
  {
    id: 'bi-analyst',
    label: 'BI Analyst',
    topics: ['reporting', 'analysis', 'practice'],
    tools: ['power-bi', 'tableau', 'sql', 'excel', 'superset'],
    blurb: 'Dashboards in Power BI and Tableau, SQL analysis and clear KPI definitions with stakeholders.',
  },
  {
    id: 'analytics-engineer',
    label: 'Analytics Engineer',
    topics: ['modeling', 'pipelines', 'practice'],
    tools: [],
    blurb: 'Data models and pipelines, and the quality checks behind trusted metrics.',
  },
  {
    id: 'data-analyst',
    label: 'Data Analyst',
    topics: ['reporting', 'analysis', 'practice'],
    tools: [],
    blurb: 'Dashboards, exploratory analysis and working with stakeholders on the questions.',
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    topics: ['pipelines', 'cloud', 'modeling'],
    tools: [],
    blurb: 'Pipelines, warehouses and the cloud platforms that run them.',
  },
  {
    id: 'data-platform-engineer',
    label: 'Cloud / Data Platform Engineer',
    topics: ['pipelines', 'cloud'],
    tools: ['fabric', 'pyspark', 'airflow', 'docker', 'azure', 'aws', 'git'],
    blurb: 'Fabric, Airflow, Docker, Azure and AWS, with Git and CI/CD around them.',
  },
  {
    id: 'data-scientist',
    label: 'Data Scientist',
    topics: ['analysis', 'research'],
    tools: [],
    blurb: 'Forecasting, machine learning and published research.',
  },
] as const satisfies ReadonlyArray<{ id: string; label: string; topics: readonly TopicId[]; tools: readonly string[]; blurb: string }>;

/**
 * Tool chips, shown in groups. `match` entries are compared with each tag, stack entry, skill label and skill
 * evidence line, in lower case. A plain entry matches when the text contains it ("sql" also matches
 * "SQL Server" and "PostgreSQL"); an entry starting with "=" must equal the whole text.
 *
 * Jobs and story chapters also pick up every tool that the skills table credits to that job, so adding a
 * dot in skills.yaml is enough for the filter to find the job.
 */
export const toolGroups = [
  { id: 'microsoft', label: 'Microsoft BI' },
  { id: 'engineering', label: 'Data engineering' },
  { id: 'platform', label: 'Cloud & DevOps' },
  { id: 'analytics', label: 'Analytics & AI' },
  { id: 'ways', label: 'Ways of working' },
] as const;

export const tools = [
  { id: 'power-bi', group: 'microsoft', label: 'Power BI', match: ['power bi'] },
  { id: 'dax', group: 'microsoft', label: 'DAX & Power Query', match: ['dax', 'power query'] },
  { id: 'fabric', group: 'microsoft', label: 'Microsoft Fabric', match: ['fabric', 'dataflow gen2', 'lakehouse', 'onelake'] },
  { id: 'power-automate', group: 'microsoft', label: 'Power Automate', match: ['power automate'] },
  { id: 'power-apps', group: 'microsoft', label: 'Power Apps', match: ['power apps'] },
  { id: 'sql', group: 'engineering', label: 'SQL', match: ['sql'] },
  { id: 'python', group: 'engineering', label: 'Python', match: ['python', 'pandas', 'numpy'] },
  { id: 'pyspark', group: 'engineering', label: 'PySpark & notebooks', match: ['pyspark', 'spark'] },
  { id: 'airflow', group: 'engineering', label: 'Airflow', match: ['airflow'] },
  { id: 'ssis', group: 'engineering', label: 'SSIS & Pentaho', match: ['ssis', 'pentaho', 'ssas', 'ssrs'] },
  { id: 'apis', group: 'engineering', label: 'APIs', match: ['apis', ' api', 'api '] },
  { id: 'azure', group: 'platform', label: 'Azure', match: ['azure'] },
  { id: 'aws', group: 'platform', label: 'AWS', match: ['aws', 'amazon'] },
  { id: 'docker', group: 'platform', label: 'Docker', match: ['docker'] },
  { id: 'git', group: 'platform', label: 'Git & CI/CD', match: ['git ', 'git,', 'github', 'ci/cd'] },
  { id: 'tableau', group: 'analytics', label: 'Tableau', match: ['tableau'] },
  { id: 'superset', group: 'analytics', label: 'Superset', match: ['superset'] },
  { id: 'excel', group: 'analytics', label: 'Excel & VBA', match: ['excel', 'visual basic'] },
  { id: 'r', group: 'analytics', label: 'R', match: ['=r'] },
  { id: 'ml', group: 'analytics', label: 'Machine learning & forecasting', match: ['machine learning', 'machine-learning', 'scikit', 'prophet', 'forecast', 'classifier', 'lifetimes', 'nlp'] },
  { id: 'genai', group: 'analytics', label: 'Generative AI & Copilot', match: ['copilot', 'llm', 'generative ai'] },
  { id: 'security', group: 'ways', label: 'Data security (RLS, PII)', match: ['row-level', 'object-level', 'pii'] },
  { id: 'quality', group: 'ways', label: 'Data quality', match: ['data quality', 'validation', 'root-cause'] },
  { id: 'agile', group: 'ways', label: 'Agile & Jira', match: ['agile', 'scrum', 'jira'] },
] as const;

export type ToolId = (typeof tools)[number]['id'];
export const toolIds = tools.map((t) => t.id) as [ToolId, ...ToolId[]];

export const projectTypes = [
  { id: 'professional', label: 'Professional' },
  { id: 'academic', label: 'Academic / research' },
  { id: 'personal', label: 'Personal' },
] as const;
