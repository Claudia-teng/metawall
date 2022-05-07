export interface AddPost {
  userId: string,
  image: string | null,
  content: string,
  tags?: string[],
}