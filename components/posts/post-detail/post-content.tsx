import { FC } from 'react';

import { IPost } from '../../../interfaces/IPost';

import { PostHeader } from './post-header';
import classes from './post-content.module.css';

interface Props {
  post: IPost;
}

export const PostContent: FC<Props> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.content}
    </article>
  );
};
