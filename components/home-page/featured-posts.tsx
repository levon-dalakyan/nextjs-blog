import { FC } from 'react';
import { IPost } from '../../interfaces/IPost';

import { PostsGrid } from '../posts/posts-grid';
import classes from './featured-posts.module.css';

interface Props {
  posts: IPost[];
}

export const FeaturedPosts: FC<Props> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
