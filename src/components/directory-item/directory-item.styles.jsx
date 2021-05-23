import styled from 'styled-components';

export const Content = styled.div`
  height: 90px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: ${(props) => (props.size === 'large' ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media only screen and (max-width: 745px) {
    min-width: 100%;
  }
`;
