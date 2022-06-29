import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '../../interfaces/IPost';

import classes from './post-item.module.css';

interface Props {
  post: IPost;
}

export const PostItem: FC<Props> = ({
  post: { title, date, excerpt, slug, image },
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
