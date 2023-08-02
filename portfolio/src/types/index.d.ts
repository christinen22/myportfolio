export interface IPost {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface IProject {
    id: number;
    title: string;
    description: string;
    image: string,
    link: string,
    created_at: string;
    updated_at: string;
}