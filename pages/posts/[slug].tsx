import type { NextPage } from 'next';

import { PostContent } from '../../components/posts/post-detail/post-content';

const DUMMNY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-07-22',
  content: '# This is a first post',
};

const PostDetailPage: NextPage = () => {
  return <PostContent post={DUMMNY_POST} />;
};

export default PostDetailPage;
