import styled from 'styled-components';
import { CustomButtonContainer } from '../custom-button/custom-button.styles';

export const Image = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  ${CustomButtonContainer} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${CustomButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${Image} {
        opacity: unset;
      }

      ${CustomButtonContainer} {
        opacity: unset;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }

  ${
    '' /* @media screen and (min-width: 1375px) {
    height: 500px;
  } */
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  margin-right: 2px;
`;
