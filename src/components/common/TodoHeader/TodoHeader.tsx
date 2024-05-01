import React from 'react';
import AddIconButton from '@/src/ui/AddIconButton';
import AddCoverButton from '@/src/ui/AddCoverButton';
import MenuButton from '@/src/ui/MenuButton';
import s from './TodoHeader.module.scss';

interface Props {
  colors?: {
    background: string;
    secondBackground: string;
    textColor: string;
    secondText: string;
    green: string;
    theme: 'light' | 'dark';
  };
}

const TodoHeader = ({ colors }: Props): React.ReactNode => {
  return (
    <header className={s.header} style={{ backgroundColor: colors?.secondBackground }}>
      <AddIconButton color={colors?.textColor} />
      <AddCoverButton color={colors?.textColor} />
      <MenuButton color={colors?.textColor} />
    </header>
  );
};

export default TodoHeader;
