import { User } from ".";

export interface Post {
  userId: User,
  image: string | null,
  content: string,
  tags?: string[],
  createdAt: string,
  likes: number,
  comments: number
}