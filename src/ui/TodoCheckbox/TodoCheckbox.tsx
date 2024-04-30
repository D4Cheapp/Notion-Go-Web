'use client';
import React, { useState } from 'react';
import s from './TodoCheckbox.module.scss';

interface Props {
  id: string;
  checked: boolean;
  borderColor?: string;
}

const TodoCheckbox = ({ id, checked, borderColor }: Props): React.ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxClick = () => setIsChecked((check) => !check);

  return (
    <label className={s.root} htmlFor={`todo-checkbox-${id}`}>
      <input
        className={s.checkbox}
        id={`todo-checkbox-${id}`}
        type="checkbox"
        onChange={handleCheckboxClick}
        checked={isChecked}
      />
      <div className={s.customCheckbox} style={{ borderColor }} />
    </label>
  );
};

export default TodoCheckbox;
