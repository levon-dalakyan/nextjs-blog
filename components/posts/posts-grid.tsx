import { FC } from 'react';

import { IPost } from '../../interfaces/IPost';

import { PostItem } from './post-item';
import classes from './posts-grid.module.css';

interface Props {
  posts: IPost[];
}

export const PostsGrid: FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
