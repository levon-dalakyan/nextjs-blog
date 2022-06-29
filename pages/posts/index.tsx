import type { NextPage } from 'next';

import { DUMMY_POSTS } from '..';

import { AllPosts } from '../../components/posts/all-posts';

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
