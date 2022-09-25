import React from 'react';
import styles from './Hint.module.scss';

export const Hint: React.FC = () => (
  <div className={styles.container}>
    <p>
      To apply new icon go to{' '}
      <a href="https://fonts.google.com/icons?icon.platform=web">
        google icons
      </a>
      , find a proper icon and put it in <strong>snake_case</strong> format
    </p>
  </div>
);
