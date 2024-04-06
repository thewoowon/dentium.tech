import ConfettiComponent from '@/components/Confetti';
import { getInterviews } from '@/lib/api';
import { PostType } from '@/types/post';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

type IndexProps = {
  posts: PostType[];
};

const rainbow = [
  '#ff6b6b',
  '#f9d423',
  '#56ab2f',
  '#a8ff78',
  '#4f6d7a',
  '#7a7a7a',
  '#4a4a4a',
  '#ff9a9e',
  '#78ffd6',
];

const Interviews = ({ posts }: IndexProps) => {
  const [confetti, setConfetti] = useState(false);
  const [selected, setSelected] = useState<PostType | null>(null);
  const router = useRouter();
  return (
    <Container>
      {confetti && <ConfettiComponent />}
      {confetti && (
        <Modal>
          <div>
            {`안녕하세요! ${selected?.position} ${selected?.writer}입니다.`}
          </div>
          <div>{`인터뷰가 곧 시작됩니다 😆`}</div>
        </Modal>
      )}
      <Grid>
        {posts.map((post, index) => {
          return (
            <Item
              key={index}
              backgroundColor={rainbow[index]}
              onClick={() => {
                setConfetti(true);
                setSelected(post);
                setTimeout(() => {
                  router.push(`/posts/${post.slug}`);
                }, 5000);
              }}
            >
              <Image
                src={post.profile ?? '/images/profile.png'}
                alt={post.title}
                width={150}
                height={150}
              />
              <Title>{post.title}</Title>
            </Item>
          );
        })}
        <Item backgroundColor={rainbow[7]}>
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: 'white',
            }}
          >
            {'?'}
          </div>
        </Item>
        <Item backgroundColor={rainbow[8]}>
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: 'white',
            }}
          >
            {'?'}
          </div>
        </Item>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getInterviews([
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

export default Interviews;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 20px;
  gap: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 790px;
  height: 790px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    height: 100%;
  }
`;

// Item을 클릭하면 뱅그그그 도는거 추가하기
const Item = styled.div<{
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? rainbow[Math.floor(Math.random() * rainbow.length)]};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out all 0s;
  gap: 10px;

  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;
  font-size: 18px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
