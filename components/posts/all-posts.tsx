import { FC } from 'react';

import { IPost } from '../../interfaces/IPost';

import { PostsGrid } from '../../components/posts/posts-grid';
import classes from './all-posts.module.css';

interface Props {
  posts: IPost[];
}

export const AllPosts: FC<Props> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
