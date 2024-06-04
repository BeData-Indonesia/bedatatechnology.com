export interface IDisplay {
  url: string;
  width: string | number;
  height: string | number;
  fileName: string;
}
export interface IBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  display: IDisplay;
  createdBy: {
    name: string;
  };
  updatedAt: string;
  content?: any;
}
