export type ExperienceEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  highlights: string[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  start: string;
  end: string;
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export type Resume = {
  fileUrl: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
};
