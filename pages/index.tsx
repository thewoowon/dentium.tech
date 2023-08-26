import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Rolling from '@/components/Rolling';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Rolling
        posts={posts.filter((post) => post.category === 'tech')}
        title={'tech'}
      />
      <Rolling
        posts={posts.filter((post) => post.category === 'interview')}
        title={'interview'}
      />
      <Rolling
        posts={posts.filter((post) => post.category === 'culture')}
        title={'culture'}
      />
      <Rolling
        posts={posts.filter((post) => post.category === 'promotion')}
        title={'promotion'}
      />
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
    'profile',
    'image',
    'category',
    'tag',
  ]);

  return {
    props: { posts },
  };
};

export default Index;
