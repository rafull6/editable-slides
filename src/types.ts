export enum ReducerActionType {
  UPDATE_BLOCK = 'UPDATE_BLOCK',
  TOGGLE_EDIT_BLOCK = 'TOGGLE_EDIT_BLOCK',
  CHANGE_BLOCK_POSITION = 'CHANGE_BLOCK_POSITION',
}

export type BlockType = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type State = {
  edit: boolean;
  selected: string | null;
  title: string;
  blocks: BlockType[];
};

export type ReducerAction = {
  type: ReducerActionType;
  payload?: any;
};
