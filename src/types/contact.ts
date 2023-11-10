export interface PostContact {
    name: string;
    link: string;
    image?: string | null;
  }
  
  export interface PatchContact {
    id?: string;
    phone: string;
    email: string;
    whatsapp: string;
    image?: string | null;
  }
  
  export interface IContact {
    status: string;
    result: number;
    data: Data;
  }
  
  export interface ISingleContact {
    status: string;
    result: number;
    data: { contact: Contact };
  }
  
  interface Data {
    contact: Contact[];
  }
  
  export interface Contact {
    _id: string;
    createdAt: string;
    email: string;
    phone: string;
    whatsapp: string;
    image: string;
    id: string;
  }
  