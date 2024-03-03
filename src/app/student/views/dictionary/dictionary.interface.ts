export interface DictionaryList {
  id: number;
  answer: string;
  english: string;
  russian: string;
  tajik: string;
}

export const dictionaryList: DictionaryList[] = [
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
];
