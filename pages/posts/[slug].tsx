import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { IPost } from '../../interfaces/IPost';
import { getFileNames, getPostData } from '../../helpers/posts-util';

import { PostContent } from '../../components/posts/post-detail/post-content';

const PostDetailPage: NextPage<Props> = ({ post }) => {
  return <PostContent post={post} />;
};

interface Props {
  post: IPost;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = (context) => {
  const params = context.params!;
  const slug = params.slug;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const fileNames = getFileNames();

  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
