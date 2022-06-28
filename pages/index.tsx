import { Fragment } from 'react';
import type { NextPage } from 'next';

import { Hero } from '../components/home-page/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default Home;
