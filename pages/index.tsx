import { Fragment } from 'react';
import type { NextPage } from 'next';

import { Hero } from '../components/home-page/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts';
import { IPost } from '../interfaces/IPost';

export const DUMMY_POSTS: IPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2022-07-22',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2022-07-22',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2022-07-22',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2022-07-22',
  },
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Home;
