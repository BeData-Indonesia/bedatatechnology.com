interface ILinks {
    first: string;
    last: string;
    next: string;
    prev: string;
}
interface Imeta {
    current_page: number;
    total: number;
    per_page: number;
    path: string;
}
export interface IBaseCollectionResponse<T> {
    links: ILinks;
    meta: Imeta;
    data: T;
}

export interface IBasePageProps {
    auth: any;
    errors: any;
    flash: {
        message: any;
    };
}
