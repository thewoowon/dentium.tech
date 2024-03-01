import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import generateRSSFeed from '@/utils/generateRSSFeed';
import SideNav from '@/components/SideNav';
import styled from '@emotion/styled';
import { SimpleRolling } from '@/components/Rolling';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const [category, setCategory] = useState('all');
  return (
    <Layout>
      <Container>
        <SideNav setCategory={setCategory} />
        <SimpleRolling
          posts={
            category !== 'all'
              ? posts.filter(
                  (post) =>
                    post.category !== 'interview' && post.category === category
                )
              : posts.filter((post) => post.category !== 'interview')
          }
        />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await generateRSSFeed();
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 0;
  gap: 40px;
`;
