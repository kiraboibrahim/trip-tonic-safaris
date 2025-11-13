export interface BlogPost {
    id: number;
    title: string;
    author: string;
    category: string;
    date: {
        day: string;
        month: string;
    };
    image: string;
    link: string;
}
