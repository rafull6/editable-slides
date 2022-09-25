import React, { useReducer } from 'react';
import { Block } from './components/Block';
import { reducer } from './reducer';
import { initialState } from './state';
import { BlockType, ReducerActionType } from './types';
import styles from './App.module.scss';
import cn from 'classnames';
import { Fab } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { exportToPdf } from './helpers';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, blocks } = state;

  const updateBlockFields = (block: BlockType) => {
    dispatch({
      type: ReducerActionType.UPDATE_BLOCK,
      payload: block,
    });
  };

  const toggleBlockEditMode = (id: string | null) => {
    dispatch({
      type: ReducerActionType.TOGGLE_EDIT_BLOCK,
      payload: id,
    });
  };

  const updateBlockPosition = (id: string | null, direction: boolean) => {
    dispatch({
      type: ReducerActionType.CHANGE_BLOCK_POSITION,
      payload: {
        id,
        direction,
      },
    });
  };

  const handleExport = () => {
    exportToPdf();
  };

  return (
    <div id="app" className={cn(styles.centerize, styles.container)}>
      <div className={cn(styles.centerize, styles.wrapper)}>
        <h1 className={styles.title}>{title}</h1>
        <div className={cn(styles.centerize, styles.blocksContainer)}>
          {blocks.map(block => (
            <Block
              {...block}
              key={block.id}
              selected={block.id === state.selected}
              onUpdateBlockFields={updateBlockFields}
              onToggleEdit={toggleBlockEditMode}
              onUpdateBlockPosition={updateBlockPosition}
            />
          ))}
        </div>
        <div className={styles.pdfButton} onClick={handleExport}>
          <Fab color="primary" aria-label="add">
            <PictureAsPdfIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default App;
