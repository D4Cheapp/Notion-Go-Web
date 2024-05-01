import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import TodoCheckbox from '@/src/ui/TodoCheckbox';
import TrashIcon from '@/src/ui/TrashIcon';
import { TaskPropertyType } from '@/src/types/taskPropertyTypes';
import TaskProperty from './TaskProperty';
import s from './ListedTask.module.scss';

interface Props {
  title: string;
  id: string;
  checked: boolean;
  properties?: TaskPropertyType[];
  icon?: string | StaticImport;
  colors?: {
    secondBackground: string;
    textColor: string;
    theme: 'light' | 'dark';
  };
}

const ListedTask = ({ icon, id, properties, title, checked, colors }: Props): React.ReactNode => {
  return (
    <div className={s.root} style={{ backgroundColor: colors?.secondBackground }}>
      <div className={s.taskContainer}>
        <div className={s.taskLabel}>
          {icon && <Image className={s.icon} src={icon} width={35} height={35} alt={title} />}
          <h1 className={s.title} style={{ color: colors?.textColor }}>
            {title}
          </h1>
        </div>
        <div className={s.taskInteraction}>
          <TodoCheckbox id={id} checked={checked} borderColor={colors?.textColor} />
          <TrashIcon />
        </div>
      </div>
      {properties && (
        <div className={s.propertiesContainer}>
          {properties.map((property) => (
            <TaskProperty theme={colors?.theme} property={property} key={property.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListedTask;
