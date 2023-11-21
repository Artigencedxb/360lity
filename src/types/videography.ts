export interface PostVideography {
  link: string | null;
  priority?: number;
}

export interface PatchVideography {
  _id?: string;
  id?: string;
  link: string | null;
  priority?: number;
}

export interface IVideography {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleVideography {
  status: string;
  result: number;
  data: { videography: Videography };
}

interface Data {
  videography: Videography[];
}

export interface Videography {
  _id: string;
  id: string;
  createdAt: string;
  link: string;
  priority?: number;
}
