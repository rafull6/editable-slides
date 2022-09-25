import { Reducer } from 'react';
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
    default:
      return state;
  }
};
