import { Fragment } from 'react';
import type { NextPage } from 'next';

import { IPost } from '../interfaces/IPost';

import { Hero } from '../components/home-page/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

interface Props {
  posts: IPost[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
