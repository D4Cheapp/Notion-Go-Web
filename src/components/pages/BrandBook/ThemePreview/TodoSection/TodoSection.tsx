import React from 'react';
import TodoHeader from '@/src/components/common/TodoHeader';
import ListedTask from '@/src/components/common/ListedTask';
import s from './TodoSection.module.scss';

interface Props {
  colors: {
    background: string;
    secondBackground: string;
    textColor: string;
    secondText: string;
    green: string;
    theme: 'light' | 'dark';
  };
}

const TodoSection = ({ colors }: Props): React.ReactNode => {
  return (
    <div
      className={s.root}
      style={{
        color: colors.textColor,
        backgroundColor: colors.background,
        borderColor: colors.secondBackground,
      }}
    >
      <h1 className={s.themeTitle}>{colors.theme === 'light' ? 'Светлая' : 'Темная'} тема</h1>
      <TodoHeader colors={colors} />
      <ListedTask
        id={`1-${colors.secondBackground}`}
        title="Создать дизайн"
        checked={false}
        colors={colors}
      />
      <ListedTask
        id={`2-${colors.secondBackground}`}
        icon="https://i.pinimg.com/736x/3e/94/aa/3e94aaa60b5103c33fc5187a756184eb.jpg"
        title="Создать сайт"
        checked={false}
        colors={colors}
      />
      <ListedTask
        id={`3-${colors.secondBackground}`}
        title="Создать логотип"
        checked={true}
        colors={colors}
      />
      <ListedTask
        id={`4-${colors.secondBackground}`}
        icon="https://i.pinimg.com/564x/69/cc/d3/69ccd3ffaded7b8bdaec7845001c5c7b.jpg"
        title="Создать макет"
        checked={true}
        colors={colors}
        properties={[
          { id: `date-${colors.secondBackground}`, type: 'date', date: { start: '2024-10-09' } },
          {
            id: `select-${colors.secondBackground}`,
            type: 'select',
            select: {
              color: 'purple',
              id: `select-var-${colors.secondBackground}`,
              name: 'Select',
            },
          },
        ]}
      />
    </div>
  );
};

export default TodoSection;
