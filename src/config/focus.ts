/**
 * The "focus" filter on the home page: lets a recruiter or hiring manager keep only the evidence that matters to them.
 *
 * Everything below is plain data, so it is easy to edit:
 *  - `topics`  are the kinds of work a reader can ask for. Every highlight, story chapter, role, case study,
 *              smaller project and skill row carries one to three topic ids (field `topics`).
 *  - `roles`   are shortcuts: choosing a role switches on a set of topics.
 *  - `tools`   are the tool chips. An item matches a tool when one of its tags or stack entries matches an alias.
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

export const roles = [
  {
    id: 'bi-developer',
    label: 'BI Developer',
    topics: ['reporting', 'modeling', 'practice'],
    blurb: 'Dashboards and reporting, semantic and dimensional models, KPI definitions and adoption.',
  },
  {
    id: 'analytics-engineer',
    label: 'Analytics Engineer',
    topics: ['modeling', 'pipelines', 'practice'],
    blurb: 'Data models and pipelines, and the quality checks behind trusted metrics.',
  },
  {
    id: 'data-analyst',
    label: 'Data Analyst',
    topics: ['reporting', 'analysis', 'practice'],
    blurb: 'Dashboards, exploratory analysis and working with stakeholders on the questions.',
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    topics: ['pipelines', 'cloud', 'modeling'],
    blurb: 'Pipelines, warehouses and the cloud platforms that run them.',
  },
  {
    id: 'data-scientist',
    label: 'Data Scientist',
    topics: ['analysis', 'research'],
    blurb: 'Forecasting, machine learning and published research.',
  },
] as const satisfies ReadonlyArray<{ id: string; label: string; topics: readonly TopicId[]; blurb: string }>;

/**
 * `match` entries are compared with each tag in lower case. A plain entry matches when the tag contains it
 * ("sql" also matches "SQL Server" and "PostgreSQL"); an entry starting with "=" must equal the whole tag.
 */
export const tools = [
  { id: 'power-bi', label: 'Power BI', match: ['power bi'] },
  { id: 'fabric', label: 'Microsoft Fabric', match: ['fabric', 'dataflow gen2'] },
  { id: 'sql', label: 'SQL', match: ['sql'] },
  { id: 'dax', label: 'DAX', match: ['dax'] },
  { id: 'python', label: 'Python', match: ['python'] },
  { id: 'r', label: 'R', match: ['=r'] },
  { id: 'ssis', label: 'SSIS', match: ['ssis'] },
  { id: 'airflow', label: 'Airflow', match: ['airflow'] },
  { id: 'docker', label: 'Docker', match: ['docker'] },
  { id: 'azure', label: 'Azure', match: ['azure'] },
  { id: 'aws', label: 'AWS', match: ['aws'] },
  { id: 'excel', label: 'Excel', match: ['excel'] },
] as const;

export type ToolId = (typeof tools)[number]['id'];
export const toolIds = tools.map((t) => t.id) as [ToolId, ...ToolId[]];

export const projectTypes = [
  { id: 'professional', label: 'Professional' },
  { id: 'academic', label: 'Academic / research' },
  { id: 'personal', label: 'Personal' },
] as const;
