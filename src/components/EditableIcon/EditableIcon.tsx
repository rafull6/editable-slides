import { Icon, TextField } from '@mui/material';
import React from 'react';
import styles from './EditableIcon.module.scss';

type Props = {
  icon: string;
  edit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EditableIcon: React.FC<Props> = ({ icon, edit, onChange }) => (
  <div className={styles.iconSection}>
    <div className={styles.iconImage}>
      <Icon color="primary" fontSize="large">
        {icon}
      </Icon>
    </div>
    {edit && (
      <div className={styles.iconField}>
        <TextField
          fullWidth
          hiddenLabel
          placeholder={icon}
          variant="filled"
          size="small"
          onChange={onChange}
        />
      </div>
    )}
  </div>
);
