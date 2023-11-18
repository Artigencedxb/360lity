export interface PostXvt {
    name: string;
    image?: string | null;
  }
  
  export interface PatchXvt {
    id?: string;
    name: string;
    image?: string | null;
  }
  
  export interface IXvt {
    status: string;
    result: number;
    data: Data;
  }
  
  export interface ISingleXvt {
    status: string;
    result: number;
    data: { xvt: Xvt };
  }
  
  interface Data {
    xvt: Xvt[];
  }
  
  export interface Xvt {
    _id: string;
    createdAt: string;
    name: string;
    image?: string;
    id: string;
  }
  