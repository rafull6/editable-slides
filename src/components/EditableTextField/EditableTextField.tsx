import { TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './EditableTextField.module.scss';

type Props = {
  edit: boolean;
  value: string;
  variant?: 'subtitle1' | 'h5' | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EditableTextField: React.FC<Props> = ({
  edit,
  value,
  variant,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      {edit ? (
        <TextField
          fullWidth
          hiddenLabel
          placeholder={value}
          variant="filled"
          size="small"
          sx={{
            marginBottom: '10px',
          }}
          onChange={onChange}
        />
      ) : (
        <Typography variant={variant} gutterBottom>
          {value}
        </Typography>
      )}
    </div>
  );
};
