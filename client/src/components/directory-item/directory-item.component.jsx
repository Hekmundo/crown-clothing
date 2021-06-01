import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
} from './directory-item.styles';

const DirectoryItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <DirectoryItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
