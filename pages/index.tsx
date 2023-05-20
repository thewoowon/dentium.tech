import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';
import styled from '@emotion/styled';
import { ARTICLE_TYPE } from '@/constant';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const [category, setCategory] = React.useState<string>('tech');

  return (
    <Layout>
      <Title>Article</Title>
      <ButtonContainer>
        {ARTICLE_TYPE.map((type, index) => (
          <Button
            selected={category === type}
            key={index}
            onClick={() => {
              setCategory(type);
            }}
          >
            {type}
          </Button>
        ))}
      </ButtonContainer>
      {posts.map((post) => {
        if (post.category !== category) return null;
        return (
          <article key={post.slug} className="mt-6 flex">
            <div className="w-4/12 h-28 xs:h-32 sm:h-48 md:h-56 lg:h-60 relative rounded-xl overflow-hidden">
              <Image src={post.image ?? ''} fill alt="post_image" priority />
            </div>
            <div className="w-8/12 px-6 relative">
              <p className="mb-1 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.date ?? ''), 'MMMM dd, yyyy')}
              </p>
              <h1 className="mb-2 text-sm xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <Link
                  className="text-gray-900 hover:text-dentium transition ease-in-out duration-200 dark:text-white dark:hover:text-dentium"
                  as={`/posts/${post.slug}`}
                  href={`/posts/[slug]`}
                >
                  {post.title}
                </Link>
              </h1>
              <p className="text-xs xss:text-xs xs:text-sm sm:text-md md:text-lg lg:text-lg mb-3">
                {post.description}
              </p>
              {/* <div className='text-sm text-gray-500 dark:text-gray-400 px-[24px] absolute left-0 bottom-0 flex justify-center items-center'>
            {post.writer} - {post.position}
            </div> */}
            </div>
          </article>
        );
      })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'writer',
    'position',
    'image',
    'category',
  ]);

  return {
    props: { posts },
  };
};

export default Index;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Button = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
  border: 1px solid #eaeaea;
  border-radius: 8px;
  color: ${(props) => (props.selected ? 'white' : 'black')};
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    margin-right: 0.7rem;
    padding: 0.4rem 0.7rem;
  }
  @media (max-width: 480px) {
    margin-right: 0.5rem;
    padding: 0.3rem 0.5rem;
  }
`;
