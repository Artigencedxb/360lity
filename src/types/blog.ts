export type IBlog =
  | {
      id: number;
      image: any;
      title: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
      description5: string;
      description6: string;
      description7?: string;
      description8?: string;
      description9?: string;
      conclusion1: string;
      conclusion2?: string;
    }
  | undefined;

export interface PostBlog {
  title: string;
  description: string;
  image?: string | null;
}

export interface PatchBlog {
  id?: string;
  title: string;
  description: string;
  image?: string | null;
}

export interface IBlogs {
  status: string;
  result: number;
  data: Data;
}

export interface ISingleBlog {
  status: string;
  result: number;
  data: { blog: Blog };
}

interface Data {
  blog: Blog[];
}

export interface Blog {
  _id: string;
  createdAt: string;
  title: string;
  image: string;
  description: string;
  id: string;
}
