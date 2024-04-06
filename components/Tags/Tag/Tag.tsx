import styled from '@emotion/styled';

type TagProps = {
  label: string;
  backgroundColor?: string;
  color?: string;
};

const Tag = ({ label, backgroundColor, color }: TagProps) => {
  return (
    <StyledTag backgroundColor={backgroundColor} color={color}>
      {label}
    </StyledTag>
  );
};

export default Tag;

const StyledTag = styled.div<{
  backgroundColor?: string;
  color?: string;
}>`
  background-color: ${(props) => props.backgroundColor || 'black'};
  color: ${(props) => props.color || 'white'};
  padding: 8px 16px;
  border-radius: 10px;
  display: inline-block;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
`;
