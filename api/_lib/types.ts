export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';
export type Background = 'none' | 'blog';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
    background: string;
    blog_author?: string;
}
