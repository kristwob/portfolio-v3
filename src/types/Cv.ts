export type CV = {
  courses: Course[];
  display: Display[];
  education: Education[];
  experiences: Experience[];
  personalia: Personalia;
  languages: Language[];
};

export type Course = {
  _key: string;
  date: string;
  title: string;
};

export type Experience = {
  _key: string;
  from: string;
  title: string;
  to: string;
};

export type Language = {
  _key: string;
  language: string;
  oral: string;
  written: string;
};

export type Personalia = {
  DOB: string;
  email: string;
  name: string;
  nationality: string;
};

export type Display = {
  _key: string;
  description: string;
  heading: string;
  location: string;
};

export type Education = {
  _key: string;
  from: string;
  title: string;
  to: string;
};
