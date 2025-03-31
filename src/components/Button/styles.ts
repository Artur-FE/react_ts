import styled from "@emotion/styled";


interface ButtonComponentStyledProps {
  isDanger?: boolean
  disabled? : boolean
  type? : string
}

export const MainButton = styled.div<ButtonComponentStyledProps>`
  width: 300px;
  height: fit-content;
  padding: 20px;
  background: ${({isDanger})=> isDanger? 'red' : 'rgb(17, 48, 127)'};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;
`;

  