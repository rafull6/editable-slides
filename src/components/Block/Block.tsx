import React, { useEffect, useState } from 'react';
import { BlockType } from '../../types';
import { EditableTextField } from '../EditableTextField';
import styles from './Block.module.scss';
import { BlockFooter } from '../BlockFooter';
import { EditableIcon } from '../EditableIcon';

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

  const moveRight = () => {
    onUpdateBlockPosition(id, true);
  };

  const moveLeft = () => {
    onUpdateBlockPosition(id, false);
  };

  return (
    <div className={styles.container}>
      <EditableIcon
        icon={icon}
        edit={selected}
        onChange={handleChange('icon')}
      />
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
      <BlockFooter
        isSelected={selected}
        handleEdit={handleEdit}
        moveRight={moveRight}
        moveLeft={moveLeft}
      />
    </div>
  );
};
