import { styled } from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;

export const ActorItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorTittle = styled.h3`
  margin: 0;
`;

export const ActorText = styled.p`
  margin: 0;
`;
