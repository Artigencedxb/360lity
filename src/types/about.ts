export interface PatchAbout{
  id?: string;
  description: string;
  title: string;
  image?: string | null;
}

export interface IAbout {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleAbout {
  status: string;
  result: number;
  data: { about: About };
}

interface Data {
  about: About[];
}

export interface About {
  _id: string;
  createdAt: string;
  description: string;
  title: string;
  image?: string;
  id: string;
}
