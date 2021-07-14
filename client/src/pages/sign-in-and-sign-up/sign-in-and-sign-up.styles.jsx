import styled from 'styled-components';

export const SignInAndSignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 950px) {
    width: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 950px) {
    margin-bottom: 50px;
    width: 70vw;
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
