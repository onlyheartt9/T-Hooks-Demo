import { useList } from '@/utils/hooks';
export const XXXStore = () => {
  return useList({
    api: null,
    initialParams: {
      A: '未设置值',
      B: '初始化B的值',
      C: 'C2',
      D: 'D1',
      E: 'bamboo',
      F: '2022-01-11',
      G: true,
      H: 'Two',
      I: ['I1', 'I2'],
    },
  });
};
