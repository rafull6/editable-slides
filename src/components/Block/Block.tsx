import { Button, Icon, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BlockType } from '../../types';
import { EditableTextField } from '../EditableTextField';
import styles from './Block.module.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {
  id: string;
  selected: boolean;
  title: string;
  icon: string;
  description: string;
  onUpdateBlockFields: (block: BlockType) => void;
  onToggleEdit: (id: string | null) => void;
  onUpdateBlockPosition: (id: string | null, direction: boolean) => void;
};

export const Block: React.FC<Props> = ({
  id,
  title,
  icon,
  description,
  selected,
  onUpdateBlockFields,
  onToggleEdit,
  onUpdateBlockPosition,
}) => {
  const [localIcon, setLocalIcon] = useState<string>();
  const [localTitle, setLocalTitle] = useState<string>();
  const [localDesc, setLocalDesc] = useState<string>();

  useEffect(() => {
    setLocalIcon(icon);
    setLocalTitle(title);
    setLocalDesc(description);
  }, [icon, title, description]);

  const handleChange =
    (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (fieldName === 'icon') {
        setLocalIcon(e.target.value);
      }

      if (fieldName === 'title') {
        setLocalTitle(e.target.value);
      }

      if (fieldName === 'description') {
        setLocalDesc(e.target.value);
      }
    };

  const handleEdit = () => {
    onToggleEdit(id);
    if (localIcon && localTitle && localDesc) {
      onUpdateBlockFields({
        id,
        icon: localIcon,
        title: localTitle,
        description: localDesc,
      });
    }
  };

  const handleCancel = () => {
    onToggleEdit(null);
    setLocalIcon(icon);
    setLocalTitle(title);
    setLocalDesc(description);
  };

  const moveRight = () => {
    onUpdateBlockPosition(id, true);
  };

  const moveLeft = () => {
    onUpdateBlockPosition(id, false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.editButton}>
        {selected && (
          <IconButton size="small" onClick={moveLeft}>
            <KeyboardArrowLeftIcon fontSize="small" />
          </IconButton>
        )}
        {selected && (
          <Button size="small" onClick={handleCancel}>
            Cancel
          </Button>
        )}
        <Button size="small" onClick={handleEdit}>
          {selected ? 'Save' : 'Edit'}
        </Button>
        {selected && (
          <IconButton size="small" onClick={moveRight}>
            <KeyboardArrowRightIcon fontSize="small" />
          </IconButton>
        )}
      </div>

      {icon && (
        <div className={styles.iconSection}>
          <div className={styles.iconImage}>
            <Icon color="primary" fontSize="large">
              {icon}
            </Icon>
          </div>
          {selected && (
            <div className={styles.iconField}>
              <TextField
                fullWidth
                hiddenLabel
                value={icon}
                variant="filled"
                size="small"
                onChange={handleChange('icon')}
              />
            </div>
          )}
        </div>
      )}
      <EditableTextField
        value={title}
        variant="h5"
        edit={selected}
        onChange={handleChange('title')}
      />
      <EditableTextField
        value={description}
        variant="subtitle1"
        edit={selected}
        onChange={handleChange('description')}
      />
    </div>
  );
};
