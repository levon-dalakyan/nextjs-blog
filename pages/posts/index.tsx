import type { NextPage } from 'next';

import { getAllPosts } from '../../helpers/posts-util';
import { IPost } from '../../interfaces/IPost';

import { AllPosts } from '../../components/posts/all-posts';

interface Props {
  posts: IPost[];
}

const AllPostsPage: NextPage<Props> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
