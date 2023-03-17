import { PostType } from './post';

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title' | 'writer' | 'position' | 'profile'> {
  type?: string;
}
