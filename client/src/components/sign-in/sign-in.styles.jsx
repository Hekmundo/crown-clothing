import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
