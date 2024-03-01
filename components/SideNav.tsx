import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

type SideNavProps = {
  setCategory: Dispatch<SetStateAction<string>>;
};

const SideNav = ({ setCategory }: SideNavProps) => {
  const navList = [
    { label: '테크', value: 'tech' },
    { label: '데브렐', value: 'culture' },
    { label: '프로모션', value: 'promotion' },
  ];
  return (
    <Container>
      <NavElement
        onClick={() => {
          setCategory('all');
        }}
      >
        {'전체보기'}
        <div>+</div>
      </NavElement>
      {navList.map((nav, index) => {
        return (
          <NavElement
            key={index}
            onClick={() => {
              setCategory(nav.value);
            }}
          >
            {nav.label}
            <div>+</div>
          </NavElement>
        );
      })}
    </Container>
  );
};

export default SideNav;

const Container = styled.div`
  min-width: 263px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;

  @media (max-width: 1140px) {
    display: none;
  }
`;

const NavElement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
  background-color: white;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
`;
