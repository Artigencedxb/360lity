export interface PostPhotography {
  image: string | null;
  priority?: number;
}

export interface PatchPhotography {
  _id?: string;
  id?: string;
  priority?: number;
  image: string | null;
}

export interface IPhotography {
  status: string;
  result: number;
  data: Data;
}

export interface ISinglePhotography {
  status: string;
  result: number;
  data: { photography: Photography };
}

interface Data {
  photography: Photography[];
}

export interface Photography {
  _id: string;
  id: string;
  createdAt: string;
  image?: string;
  priority?: number;
}
