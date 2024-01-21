import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const ListItem = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  margin: 0;  
  // border: 1px solid #bf4f74;
  box-sizing: border-box;
`;


export const Img = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover; 
  border-radius: 14px; 
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h6`
  font-size: 18px;
  margin: 0;
  display: inline;
  color: #121417; 
`;

export const Price = styled.h6`
  font-size: 16px;
  margin: 0;
  color: #bf4f74;
  display: inline;
`;

export const Description = styled.p`
  color: #121417; 
  opacity: 0.5; 
`;

export const LearnMoreButton = styled.button`
  background-color: #3470FF; 
  color: #fff;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;  
  border-radius: 12px; 
`;
