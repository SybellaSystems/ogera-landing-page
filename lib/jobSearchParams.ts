import type { ApiJob } from "./api";

export const JOB_SEARCH_PARAMS = {
  skills: "q",
  experience: "experience",
  jobType: "jobType",
} as const;

export type JobSearchFilters = {
  skills: string;
  experience: string;
  jobType: string;
};

/** Matches Create Job employment type options */
export const JOB_TYPE_FILTER_OPTIONS = [
  { value: "fulltime", label: "Full-time" },
  { value: "parttime", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
  { value: "ogerawin", label: "Ogerawin" },
] as const;

/** Matches Create Job experience level options */
export const EXPERIENCE_FILTER_OPTIONS = [
  { value: "entry", label: "Entry Level" },
  { value: "mid", label: "Mid Level" },
  { value: "senior", label: "Senior Level" },
  { value: "executive", label: "Executive" },
] as const;

export const JOB_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  JOB_TYPE_FILTER_OPTIONS.map((o) => [o.value, o.label])
);

export const EXPERIENCE_LABELS: Record<string, string> = Object.fromEntries(
  EXPERIENCE_FILTER_OPTIONS.map((o) => [o.value, o.label])
);

export function buildJobsSearchUrl(filters: Partial<JobSearchFilters>): string {
  const params = new URLSearchParams();
  const trimmedSkills = filters.skills?.trim();
  if (trimmedSkills) params.set(JOB_SEARCH_PARAMS.skills, trimmedSkills);
  if (filters.experience) params.set(JOB_SEARCH_PARAMS.experience, filters.experience);
  if (filters.jobType) params.set(JOB_SEARCH_PARAMS.jobType, filters.jobType);
  const query = params.toString();
  return query ? `/jobs?${query}` : "/jobs";
}

export function parseJobsSearchParams(
  searchParams: URLSearchParams
): JobSearchFilters {
  return {
    skills: searchParams.get(JOB_SEARCH_PARAMS.skills)?.trim() || "",
    experience: searchParams.get(JOB_SEARCH_PARAMS.experience)?.trim() || "",
    jobType: searchParams.get(JOB_SEARCH_PARAMS.jobType)?.trim() || "",
  };
}

function normalizeToken(value: string): string {
  return value.toLowerCase().replace(/[\s_-]/g, "");
}

const EXPERIENCE_MATCH_TOKENS: Record<string, string[]> = {
  entry: ["entrylevel", "entry"],
  mid: ["midlevel", "mid"],
  senior: ["seniorlevel", "senior"],
  executive: ["executive"],
};

export function matchesJobType(job: ApiJob, jobType: string): boolean {
  if (!jobType) return true;

  if (jobType === "ogerawin") {
    const haystack = [job.job_title, job.description, job.category]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes("ogera");
  }

  const employment = normalizeToken(job.employment_type || "");
  const aliases: Record<string, string[]> = {
    fulltime: ["fulltime"],
    parttime: ["parttime"],
    contract: ["contract"],
    freelance: ["freelance"],
    internship: ["internship"],
  };
  const expected = aliases[jobType];
  if (!expected) return true;
  return expected.some((alias) => employment.includes(alias));
}

export function matchesExperience(job: ApiJob, experienceFilter: string): boolean {
  if (!experienceFilter) return true;

  const level = normalizeToken(job.experience_level || "");
  if (!level) return false;

  const tokens = EXPERIENCE_MATCH_TOKENS[experienceFilter];
  if (!tokens) {
    return level.includes(normalizeToken(experienceFilter));
  }

  return tokens.some((token) => level.includes(token));
}

export function matchesSkillsSearch(job: ApiJob, query: string): boolean {
  if (!query) return true;

  const q = query.toLowerCase();
  const fields = [
    job.job_title,
    job.employer?.full_name,
    job.category,
    job.description,
    job.skills,
    job.location,
  ];

  return fields.some((field) => field?.toLowerCase().includes(q));
}
