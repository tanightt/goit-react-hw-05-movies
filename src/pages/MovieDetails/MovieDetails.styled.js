const { styled } = require('styled-components');

export const BackBtn = styled.button`
  width: 100px;
  margin-top: 15px;
  margin-left: 15px;
  background-color: transparent;
  border-color: transparent;
  background-image: url('https://www.svgrepo.com/download/459460/left-arrow.svg');
  background-size: 22%;
  background-repeat: no-repeat;
  background-position: left;
`;

export const MovieCard = styled.div`
  height: 400px;
  padding: 15px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid grey;
`;

export const Genres = styled.ul`
  padding: 0;
  display: flex;
  gap: 5px;
  list-style: none;
`;

export const Details = styled.ul`
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

export const Info = styled.p`
  margin-left: 15px;
`;
