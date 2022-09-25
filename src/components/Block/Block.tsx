import { Button, Icon, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BlockType } from '../../types';
import { EditableTextField } from '../EditableTextField';
import styles from './Block.module.scss';

type Props = {
  id: string;
  selected: boolean;
  title: string;
  icon: string;
  description: string;
  updateBlock: (block: BlockType) => void;
  toggleEdit: (id: string) => void;
};

export const Block: React.FC<Props> = ({
  id,
  title,
  icon,
  description,
  selected,
  updateBlock,
  toggleEdit,
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

      // console.log(fieldName, e.target.value);
      // updateField({ fieldName, fieldValue: e.target.value });
    };

  const handleEdit = () => {
    toggleEdit(id);
    if (localIcon && localTitle && localDesc) {
      updateBlock({
        id,
        icon: localIcon,
        title: localTitle,
        description: localDesc,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.editButton}>
        <Button size="small" onClick={handleEdit}>
          Edit
        </Button>
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
