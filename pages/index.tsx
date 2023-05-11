import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12 flex">
          <div className='w-4/12 h-28 xs:h-32 sm:h-48 md:h-56 lg:h-60 relative rounded-xl overflow-hidden'>
            <Image src={post.image ?? ""} fill alt='post_image' priority/>
          </div>
          <div className='w-8/12 px-6 relative'>
            <p className="mb-1 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date ?? ""), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-sm xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <Link className="text-gray-900 hover:text-dentium transition ease-in-out duration-200 dark:text-white dark:hover:text-dentium" as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  {post.title}
              </Link>
            </h1>
            <p className="text-xs xss:text-xs xs:text-sm sm:text-md md:text-lg lg:text-lg mb-3">{post.description}</p>
            {/* <div className='text-sm text-gray-500 dark:text-gray-400 px-[24px] absolute left-0 bottom-0 flex justify-center items-center'>
            {post.writer} - {post.position}
            </div> */}
          </div>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title','writer','position','image']);

  return {
    props: { posts },
  };
};

export default Index;
