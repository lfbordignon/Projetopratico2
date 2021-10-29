import styled from 'styled-components';

export const DropdownTitle = styled.div`
  margin: 20px 0 5px;
  width: 200px;
  height: 40px;

  background: #ffffff;

  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0px 12px;

  display: flex;
  align-items: center;
  font-family: 'Nunito';
  cursor: pointer;

  span {
    margin: 0 5px 0;
    margin-left: auto;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 400px;
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 20px;
  background: #ffffff;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  padding: 8px 0 8px 10px;
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownContentText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 20px 0 0;
  text-align: justify;
`;

export const DropdownContextLink = styled.a`
  padding: 10px;

  display: flex;
  align-items: center;

  color: #000000;
  text-decoration: none;
  cursor: pointer;
`;

export const HeartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
