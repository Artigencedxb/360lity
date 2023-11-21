export interface PostAnimation {
  link: string | null;
  priority?: number;
}

export interface PatchAnimation {
  _id?: string;
  id?: string;
  link: string | null;
  priority?: number;
}

export interface IAnimation {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleAnimation {
  status: string;
  result: number;
  data: { animation: Animation };
}

interface Data {
  animation: Animation[];
}

export interface Animation {
  _id: string;
  id: string;
  createdAt: string;
  link: string;
  priority?: number;
}
