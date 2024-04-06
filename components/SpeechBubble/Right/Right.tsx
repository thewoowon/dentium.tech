import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

type RightSpeechBubbleProps = {
  title: string;
  description: string;
  thumbnail: string;
};

const RightSpeechBubble = ({
  title,
  description,
  thumbnail,
}: RightSpeechBubbleProps) => {
  return (
    <Container>
      <Thumbnail>
        <Image src={thumbnail} alt={title} width={30} height={30} />
      </Thumbnail>
      <SpeechBubble>
        <Title>{title}</Title>
        <Description>
          {description.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </Description>
      </SpeechBubble>
    </Container>
  );
};

export default RightSpeechBubble;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;

const SpeechBubble = styled.div`
  flex: 1;
  background: ${COLORS.WHITE};
  border-radius: 0.4em;
  padding: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 30px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: ${COLORS.LIGHT_BG};
    border-left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLORS.TEXT};
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 1rem;
  color: ${COLORS.TEXT};
`;

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.4em;
  }
`;
