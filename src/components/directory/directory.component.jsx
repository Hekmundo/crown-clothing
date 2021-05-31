import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionsProps }) => (
        <DirectoryItem key={id} {...otherSectionsProps} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
