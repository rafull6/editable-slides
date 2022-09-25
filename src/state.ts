import { State } from './types';

export const initialState: State = {
  edit: false,
  selected: null,
  title: 'Insert a title here',
  blocks: [
    {
      id: 'ad42',
      icon: 'favorite',
      title: 'Insert text here',
      description: 'Add here your additional text',
    },
    {
      id: 'f2r5',
      icon: 'pie_chart',
      title: 'Insert text here',
      description: 'Add here your additional text',
    },
    {
      id: 'ghp3',
      icon: 'thumb_up',
      title: 'Insert text here',
      description: 'Add here your additional text',
    },
  ],
};
