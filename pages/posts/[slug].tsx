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
import Layout from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import GPT from '@/components/GPT';

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  rawSource: string;
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({
  rawSource,
  source,
  frontMatter,
}: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - ${frontMatter.writer}`,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: frontMatter.date,
    writer: frontMatter.writer,
    position: frontMatter.position,
    type: 'article',
  };

  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    if (slug !== '20230811_george_bit_magic') return;
    const MIN_DURATION = 10;
    const body = document.querySelector('body');

    function makeSnowflake() {
      const snowflake = document.createElement('div');
      const snowflake2 = document.createElement('div');
      const delay = Math.random() * 200;
      const initialOpacity = Math.random();
      const duration = Math.random() * 1 + MIN_DURATION;

      snowflake.classList.add('snowflake-void');
      snowflake.innerText = '0';
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDelay = delay + 's';
      snowflake.style.opacity = initialOpacity + '';
      snowflake.style.animation = `snowFall ${duration}s linear infinite`;

      snowflake2.classList.add('snowflake-void');
      snowflake2.innerText = '1';
      snowflake2.style.left = Math.random() * window.innerWidth + 'px';
      snowflake2.style.animationDelay = delay + 's';
      snowflake2.style.opacity = initialOpacity + '';
      snowflake2.style.animation = `snowFall ${duration}s linear infinite`;

      body?.appendChild(snowflake);
      body?.appendChild(snowflake2);

      setTimeout(() => {
        body?.removeChild(snowflake);
        body?.removeChild(snowflake2);
      }, (duration + delay) * 100);
    }
    for (let i = 0; i < 20; i++) {
      setTimeout(makeSnowflake, i * 1000);
    }
  }, []);

  return (
    <Layout customMeta={customMeta}>
      <article>
        <header className="prose m-auto relative">
          <h1 className="text-4xl sm:text-6xl text-gray-900 dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex justify-start items-center pb-2">
            <div className="mr-4 w-14 h-14 relative flex justify-start items-center rounded-full overflow-hidden">
              <Image
                src={frontMatter.profile ?? '/images/profile.jpeg'}
                alt="profile"
                fill
                priority
              />
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
          <GPT article={rawSource} />
          <MDXRemote {...source} components={components} />
        </div>
        <div className="prose m-auto pt-16 pb-10 flex items-center">
          <div className="mx-4 w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden">
            <Image
              src={frontMatter.profile ?? '/images/profile.jpeg'}
              alt="profile"
              fill
              priority
            />
          </div>
          <div className="text-sm sm:text-lg">
            안녕하세요 👏
            <br />
            {frontMatter.position}{' '}
            <span className="font-bold">{frontMatter.writer}</span>입니다.
            <br />
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

  // 코드는 삭제한다.
  let rawSource = content.replace(/```[\s\S]*?```/g, '');
  // 이미지는 삭제한다.
  const images = rawSource.match(/!\[[\s\S]*?\]\([\s\S]*?\)/g);
  if (images) {
    images.forEach((image) => {
      rawSource = rawSource.replace(image, '');
    });
  }
  // 이미지 태그는 삭제한다.
  const imageTags = rawSource.match(/<img[\s\S]*?>/g);
  if (imageTags) {
    imageTags.forEach((imageTag) => {
      rawSource = rawSource.replace(imageTag, '');
    });
  }
  // <Image/> 태그는 삭제한다.
  const nextImageTags = rawSource.match(/<Image[\s\S]*?>/g);
  if (nextImageTags) {
    nextImageTags.forEach((imageTag) => {
      rawSource = rawSource.replace(imageTag, '');
    });
  }
  // div 태그로 감싼 내용은 삭제한다.
  const divTags = rawSource.match(/<div[\s\S]*?>[\s\S]*?<\/div>/g);
  if (divTags) {
    divTags.forEach((divTag) => {
      rawSource = rawSource.replace(divTag, '');
    });
  }

  // p 태그로 감싼 내용은 삭제한다.
  const pTags = rawSource.match(/<p[\s\S]*?>[\s\S]*?<\/p>/g);
  if (pTags) {
    pTags.forEach((pTag) => {
      rawSource = rawSource.replace(pTag, '');
    });
  }
  // span 태그로 감싼 내용은 삭제한다.
  const spanTags = rawSource.match(/<span[\s\S]*?>[\s\S]*?<\/span>/g);
  if (spanTags) {
    spanTags.forEach((spanTag) => {
      rawSource = rawSource.replace(spanTag, '');
    });
  }

  // 띄어쓰기가 2번 이상인 경우는 삭제한다.
  rawSource = rawSource.replace(/\s{2,}/g, ' ');

  // 하이퍼링크는 삭제한다.
  rawSource = rawSource.replace(/\[.*?\]\(.*?\)/g, '');

  // https 링크는 삭제한다.
  rawSource = rawSource.replace(/https?:\/\/.*?\s/g, '');

  // <br/> 태그는 삭제한다.
  rawSource = rawSource.replace(/<br\/>/g, '');

  // 백틱을 삭제한다.
  rawSource = rawSource.replace(/`/g, '');

  // 4097자를 넘지 않게 한다.
  rawSource = rawSource.substring(0, 3000);

  return {
    props: {
      rawSource,
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
