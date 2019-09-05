import styled from "styled-components";

export const Outermost = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 32px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 7.5px 15px;
`;

export const Form = styled.form`
  width: 50%;
`;
