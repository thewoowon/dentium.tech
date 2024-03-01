import { PostType } from '@/types/post';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Element = ({ post }: { post: PostType }) => {
  const router = useRouter();
  return (
    <Container
      onClick={() => {
        router.push(`/posts/${post.slug}`);
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <Tag>{`# ${post.tag}`}</Tag>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            paddingTop: '10px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              marginRight: '10px',
            }}
          >
            <Image
              src={post.profile ?? ''}
              alt={post.writer ?? ''}
              fill
              sizes="100% 100%"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                color: '#666',
              }}
            >{`${post.position} | ${post.writer}`}</div>
            <div
              style={{
                fontSize: '14px',
                marginLeft: '10px',
                fontWeight: 500,
              }}
            >
              {post.date}
            </div>
          </div>
        </div>
      </div>

      <ImageContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            width: '245px',
            height: '130px',
            borderRadius: '12px',
          }}
        >
          <Image
            src={post.image ?? ''}
            fill
            alt="post_image"
            sizes="100% 100%"
          />
        </div>
      </ImageContainer>
    </Container>
  );
};

export default Element;

const Container = styled.div`
  max-width: 840px;
  width: 100%;
  background-color: white;
  overflow: inherit;
  padding: 16px;
  display: flex;
  /* overflow: hidden; */
  border-radius: 12px;
  margin-bottom: 20px;
  position: relative;
  justify-content: space-between;
  gap: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }

  @media (max-width: 1140px) {
  }
`;

const Tag = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  color: #666;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const Description = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #666;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  @media (max-width: 1140px) {
    display: none;
  }
`;
