export interface PatchArVr {
  id?: string;
  description: string;
  title: string;
  image?: string | null;
  descImage1?: string | null;
  descImage2?: string | null;
}

export interface IArVr {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleArVr {
  status: string;
  result: number;
  data: { arvr: ArVr };
}

interface Data {
  arvr: ArVr[];
}

export interface ArVr {
  _id: string;
  createdAt: string;
  description: string;
  title: string;
  image?: string;
  descImage1?: string;
  descImage2?: string;
  id: string;
}
