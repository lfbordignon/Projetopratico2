import styled from 'styled-components';

export const BodyBackground = styled.div`
  background: #eceef2;

  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const FormBackground = styled.div`
  width: 617px;
  height: 763px;
  background: #ffffff;
  border-radius: 20px;
  padding: 56px 50px;
`;



export const Form = styled.form`
  height: 600px;
  position: relative;
  pointer-events: ${({ alert }) => alert && 'none'};
`;

export const Cutton = styled.button.attrs({ type: 'submit' })`
  position: absolute;
  display: flex;
  font-family: 'Nunito', sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0px 12px;
  width: 85px;
  height: 42px;
  background: #074ee8;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  bottom: 0;
  right: 0;
  cursor: pointer;

  p {
    margin-right: auto;
  }
`;
