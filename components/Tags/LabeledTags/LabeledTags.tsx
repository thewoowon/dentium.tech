import styled from '@emotion/styled';
import Tags from '../Tags';

type LabeledTagsProps = {
  labels: string[];
  title: string;
};

const LabeledTags = ({ labels, title }: LabeledTagsProps) => {
  return (
    <Container>
      <Title>{title}:</Title>
      <Tags labels={labels} />
    </Container>
  );
};

export default LabeledTags;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
