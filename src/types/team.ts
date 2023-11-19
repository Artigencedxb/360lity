export interface PostTeam {
  name: string;
  role: string;
  whatsapp?: string;
  priority?: number;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  description: string;
  image?: string | null;
}

export interface PatchTeam {
  id?: string;
  _id?: string;
  name: string;
  role: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  description: string;
  priority?: number;
  image?: string | null;
}

export interface ITeam {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleTeam {
  status: string;
  result: number;
  data: { team: Team };
}

interface Data {
  team: Team[];
}

export interface Team {
  _id: string;
  id: string;
  createdAt: string;
  name: string;
  role: string;
  whatsapp?: string;
  priority?: number;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  description: string;
  image?: string;
}
