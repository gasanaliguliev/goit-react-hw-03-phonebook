import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  font-weight: 500;
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 4px 8px;
  border: none;
  border: 1px solid #000;
  border-radius: 5px;
  font: inherit;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 4px 8px;
  width : 200px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 24px;
  background-color: blue;
  color: white;
`;