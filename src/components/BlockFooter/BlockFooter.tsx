import { Button, IconButton } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {
  isSelected: boolean;
  handleEdit: () => void;
  moveRight: () => void;
  moveLeft: () => void;
};

export const BlockFooter: React.FC<Props> = ({
  isSelected,
  handleEdit,
  moveRight,
  moveLeft,
}) => {
  return (
    <div>
      {isSelected && (
        <IconButton size="small" onClick={moveLeft}>
          <KeyboardArrowLeftIcon fontSize="small" />
        </IconButton>
      )}
      <Button size="small" onClick={handleEdit}>
        {isSelected ? 'Save' : 'Edit'}
      </Button>
      {isSelected && (
        <IconButton size="small" onClick={moveRight}>
          <KeyboardArrowRightIcon fontSize="small" />
        </IconButton>
      )}
    </div>
  );
};
