export interface PostProject {
  name: string;
  link: string;
  description: string;
  image?: string | null;
}

export interface PatchProject {
  id?: string;
  name: string;
  link: string;
  description: string;
  image?: string | null;
}

export interface IProject {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleProject {
  status: string;
  result: number;
  data: { project: Project };
}

interface Data {
  project: Project[];
}

export interface Project {
  _id: string;
  createdAt: string;
  name: string;
  image: string;
  link: string;
  description: string;
  id: string;
}
