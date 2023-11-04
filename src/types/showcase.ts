export interface PostShowcase {
  name: string;
  link: string;
  image?: string | null;
}

export interface PatchShowcase {
  id?: string;
  name: string;
  link: string;
  image?: string | null;
}

export interface IShowcase {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleShowcase {
  status: string;
  result: number;
  data: { showcase: Showcase };
}

interface Data {
  showcase: Showcase[];
}

export interface Showcase {
  _id: string;
  createdAt: string;
  name: string;
  image: string;
  link: string;
  description: string;
  id: string;
}
