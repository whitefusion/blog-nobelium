export interface Post {
  id: string;
  date: string;
  type: string[];
  slug: string;
  tags: string[];
  summary: string;
  title: string;
  status: string[];
  fullWidth?: boolean;
}
