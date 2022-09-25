import { Reducer } from 'react';
import { moveToIndex } from './helpers';
import { ReducerAction, ReducerActionType, State } from './types';

export const reducer: Reducer<State, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.TOGGLE_EDIT_BLOCK:
      return {
        ...state,
        selected: action.payload === state.selected ? null : action.payload,
      };
    case ReducerActionType.UPDATE_BLOCK:
      return {
        ...state,
        blocks: state.blocks.map(block => {
          if (block.id === action.payload.id) {
            return action.payload;
          }
          return block;
        }),
      };
    case ReducerActionType.CHANGE_BLOCK_POSITION:
      const blocks = [...state.blocks];
      const lastAvailableIndex = state.blocks.length - 1;

      const fromIndex = blocks.findIndex(block => block.id === state.selected);
      const toIndex = moveToIndex(
        action.payload.direction,
        fromIndex,
        lastAvailableIndex,
      );
      const elementToMove = blocks[fromIndex];

      blocks.splice(fromIndex, 1);
      blocks.splice(toIndex, 0, elementToMove);

      return { ...state, blocks };
    default:
      return state;
  }
};
