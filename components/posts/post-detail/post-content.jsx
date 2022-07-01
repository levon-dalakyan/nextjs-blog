import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter';

import { PostHeader } from './post-header';
import classes from './post-content.module.css';

export const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img(img) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${img.src}`}
    //       alt={img.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(p) {
      const { node } = p;

      if (node.children[0].tagName === 'img') {
        const img = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${img.properties.src}`}
              alt={img.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{p.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const match = /language-(\w+)/.exec(className || '');

      return (
        <SyntaxHighlighter language={match[1]} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
