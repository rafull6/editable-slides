import React, { useReducer } from 'react';
import { Block } from './components/Block';
import { reducer } from './reducer';
import { initialState } from './state';
import { BlockType, ReducerActionType } from './types';
import styles from './App.module.scss';
import cn from 'classnames';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, blocks } = state;

  // const updateField = ({
  //   fieldName,
  //   fieldValue,
  // }: {
  //   fieldName: string;
  //   fieldValue: string;
  // }) => {
  //   dispatch({
  //     type: ReducerActionType.UPDATE_BLOCK_FIELD,
  //     payload: { fieldName, fieldValue },
  //   });
  // };

  const updateBlock = (block: BlockType) => {
    dispatch({
      type: ReducerActionType.UPDATE_BLOCK,
      payload: block,
    });
  };

  const toggleBlockEditMode = (id: string) => {
    dispatch({
      type: ReducerActionType.TOGGLE_EDIT_BLOCK,
      payload: id,
    });
  };

  return (
    <div className={cn(styles.centerize, styles.container)}>
      <div className={cn(styles.centerize, styles.wrapper)}>
        <h1 className={styles.title}>{title}</h1>
        <div className={cn(styles.centerize, styles.blocksContainer)}>
          {blocks.map(({ icon, title, description, id }) => (
            <Block
              key={id}
              id={id}
              selected={id === state.selected}
              icon={icon}
              title={title}
              description={description}
              updateBlock={updateBlock}
              toggleEdit={toggleBlockEditMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
