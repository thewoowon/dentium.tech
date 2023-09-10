import styled from '@emotion/styled';
import React from 'react';
import Cell from './Cell';

const imageList = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];

const Accordion = () => {
  return (
    <Layout>
      <GroupContainer>
        {imageList.map((cell, index) => (
          <Cell key={index} image={cell} index={index} />
        ))}
      </GroupContainer>
    </Layout>
  );
};

export default Accordion;

const GroupContainer = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

const Layout = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin: 0;
  background: #fcfcfc;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
