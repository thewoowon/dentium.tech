import { PostType } from '@/types/post';
import styled from '@emotion/styled';
import RollingItem from '../RollingItem';

type RollingProps = {
  posts: PostType[];
};

const SimpleRolling = ({ posts }: RollingProps) => {
  return (
    <Container>
      {posts.map((post, index) => {
        return <RollingItem key={index} post={post} />;
      })}
    </Container>
  );
};

export default SimpleRolling;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
