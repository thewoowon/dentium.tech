import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - ${frontMatter.writer}`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    writer: frontMatter.writer,
    position: frontMatter.position,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <header className="prose m-auto">
          <h1 className="text-6xl text-gray-900 dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex justify-start items-center pb-2">
            <div className="mr-4 w-14 h-14 relative flex justify-start items-center rounded-full overflow-hidden">
              <Image src={frontMatter.profile ?? "/images/profile.jpeg"} alt="profile" fill />
            </div>
            <div>
              <div className="text-md text-gray-900 dark:text-gray-400">
                {`${frontMatter.position} - ${frontMatter.writer}`}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(frontMatter.date ?? ''), 'MMMM dd, yyyy')}
              </div>
            </div>
          </div>
        </header>
        <div className="prose dark:prose-dark m-auto">
          <MDXRemote {...source} components={components} />
        </div>
        <div className="prose m-auto py-10">
          <div className="py-10 bg-white shadow-md rounded-md flex items-center justify-start">
            <div className="mx-16 w-28 h-28 relative rounded-full overflow-hidden">
              <Image src={frontMatter.profile ?? "/images/profile.jpeg"} alt="profile" fill></Image>
            </div>
            <div>
              안녕하세요. 저는 <span className="font-bold">엘레나</span>입니다.
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
