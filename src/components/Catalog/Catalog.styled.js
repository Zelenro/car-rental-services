import styled from 'styled-components';


export const FilterContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center; 
  gap: 10px;
  width: 1100px;
  
  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #8A8A89;
    width: 224px;
    font-size: 18px;
  }
  
  select, input {
    padding: 0;
    padding-left: 18px;
    padding-right: 18px;
    height: 48px; 
    font-size: 14px;
     border: none;
    border-radius: 12px; 
    background-color: #F7F7FB;
  }

  button {
    background-color: #3470FF; 
    margin-top: auto;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 136px;
    height: 48px;  
    border-radius: 12px; 

    &:hover {
      background-color: #0056b3;
    }
  }
`;



export const List = styled.ul`
display: flex;
width: 1184px;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0;
  list-style: none;
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



export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; 
`;

export const LoadMoreButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;