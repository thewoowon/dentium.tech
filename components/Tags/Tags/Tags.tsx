import styled from '@emotion/styled';
import { Tag } from '..';

type TagsProps = {
  labels: string[];
};

const backgroundColor = ['#35374B', '#344955', '#50727B', '#78A083'];

const Tags = ({ labels }: TagsProps) => {
  return (
    <Container>
      {labels.map((label, index) => {
        return (
          <Tag
            key={index}
            label={label}
            backgroundColor={backgroundColor[index % 4]}
            color="white"
          />
        );
      })}
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;
