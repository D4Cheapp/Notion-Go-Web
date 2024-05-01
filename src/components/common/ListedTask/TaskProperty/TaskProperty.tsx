import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import { TaskPropertyType } from '@/src/types/taskPropertyTypes';
import TodoCheckbox from '@/src/ui/TodoCheckbox';
import { handleDateToString } from './utils/handleDateToString';
import PropTemplate from './PropTemplate';
import s from './TaskProperty.module.scss';

interface Props {
  property: TaskPropertyType;
  propertyName?: string;
  theme?: 'dark' | 'light';
}

const TaskProperty = ({ property, propertyName, theme }: Props): React.ReactNode => {
  const { type } = property;
  const textStyle = theme
    ? { color: theme === 'light' ? '#333' : '#fbf5e5' }
    : { color: 'var(--textColor)' };

  switch (type) {
    case 'rich_text':
      const isTextExist = property.rich_text.length > 0;
      if (isTextExist) {
        const { annotations, href, plain_text } = property.rich_text[0];
        const { bold, color, italic, strikethrough, underline } = annotations;
        const isCustomColor = color !== 'default';
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/text.svg`}
                width={24}
                height={24}
                alt="text"
              />
            }
            key={property.id}
          >
            <p
              className={cn(
                s.text,
                { [s.boldText]: bold },
                { [s.italicText]: italic },
                { [s.strikethroughText]: strikethrough },
                { [s.linkText]: href || underline },
              )}
              style={isCustomColor ? { color: 'var(--' + color + ')' } : textStyle}
            >
              {plain_text}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'number':
      const isNumberExist = property.number !== null;
      if (isNumberExist) {
        const number = property.number;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/number.svg`}
                width={24}
                height={24}
                alt="number"
              />
            }
            key={property.id}
          >
            <p className={s.text} style={textStyle}>
              {number}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'select':
      const isSelectExist = property.select !== null;
      if (isSelectExist) {
        const { color, name } = property.select;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/select.svg`}
                width={24}
                height={24}
                alt="select"
              />
            }
            key={property.id}
          >
            <p
              className={s.select}
              style={{ backgroundColor: 'var(--' + color + ')', ...textStyle }}
            >
              {name}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'multi_select':
      const isMultiSelectExist = property.multi_select.length > 0;
      if (isMultiSelectExist) {
        const options = property.multi_select;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/multiSelect.svg`}
                width={24}
                height={24}
                alt="multiSelect"
              />
            }
            key={property.id}
          >
            <div className={s.optionsContainer}>
              {options.map((option) => {
                const { color, name, id } = option;
                return (
                  <p
                    key={id}
                    className={s.select}
                    style={{ backgroundColor: 'var(--' + color + ')', ...textStyle }}
                  >
                    {name}
                  </p>
                );
              })}
            </div>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'status':
      const isStatusExist = property.status !== null;
      if (isStatusExist) {
        const { color, name } = property.status;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/status.svg`}
                width={24}
                height={24}
                alt="status"
              />
            }
            key={property.id}
          >
            <p
              className={s.select}
              style={{ backgroundColor: 'var(--' + color + ')', ...textStyle }}
            >
              {name}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'date':
      const isDateExist = property.date !== null;
      if (isDateExist) {
        const { end, start } = property.date;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/date.svg`}
                width={24}
                height={24}
                alt="date"
              />
            }
            key={property.id}
          >
            <p className={s.text}>{handleDateToString(start)}</p>
            {end && (
              <p className={s.text} style={textStyle}>
                {'—  '}
                {handleDateToString(end)}
              </p>
            )}
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'checkbox':
      const checked = property.checkbox;
      return (
        <PropTemplate
          svg={
            <Image
              src={`/icons/properties/${theme}/checkbox.svg`}
              width={24}
              height={24}
              alt="checkbox"
            />
          }
          key={property.id}
        >
          <TodoCheckbox checked={checked} id={property.id} />
        </PropTemplate>
      );
    case 'url':
      const isUrlExist = property.url !== null;
      if (isUrlExist) {
        const url = property.url.slice(0, 25) + '...';
        return (
          <PropTemplate
            svg={
              <Image src={`/icons/properties/${theme}/url.svg`} width={24} height={24} alt="url" />
            }
            key={property.id}
          >
            <p className={s.text} style={textStyle}>
              {url}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'email':
      const isEmailExist = property.email !== null;
      if (isEmailExist) {
        const email = property.email;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/email.svg`}
                width={24}
                height={24}
                alt="email"
              />
            }
            key={property.id}
          >
            <p className={s.text} style={textStyle}>
              {email}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'phone_number':
      const isPhoneExist = property.phone_number !== null;
      if (isPhoneExist) {
        const phone = property.phone_number;
        return (
          <PropTemplate
            svg={
              <Image
                src={`/icons/properties/${theme}/phone.svg`}
                width={24}
                height={24}
                alt="phone"
              />
            }
            key={property.id}
          >
            <p className={s.text} style={textStyle}>
              {phone}
            </p>
          </PropTemplate>
        );
      } else {
        return null;
      }
    case 'created_time':
      const createdTime = property.created_time;
      return (
        <PropTemplate
          svg={
            <Image
              src={`/icons/properties/${theme}/time.svg`}
              width={24}
              height={24}
              alt="createdTime"
            />
          }
          key={property.id}
        >
          <p className={s.text} style={textStyle}>
            {handleDateToString(createdTime)}
          </p>
        </PropTemplate>
      );
    case 'last_edited_time':
      const lastEditedTime = property.last_edited_time;
      return (
        <PropTemplate
          svg={
            <Image
              src={`/icons/properties/${theme}/time.svg`}
              width={24}
              height={24}
              alt="lastEditedTime"
            />
          }
          key={property.id}
        >
          <p className={s.text} style={textStyle}>
            {handleDateToString(lastEditedTime)}
          </p>
        </PropTemplate>
      );
    case 'unique_id':
      const id = property.unique_id.number;
      return (
        <PropTemplate
          svg={<Image src={`/icons/properties/${theme}/id.svg`} width={24} height={24} alt="id" />}
          key={property.id}
        >
          <p className={s.text} style={textStyle}>
            {id}
          </p>
        </PropTemplate>
      );
    case 'files':
      if (propertyName) {
        const isFilesExist = property.files.length > 0;
        if (isFilesExist) {
          const files = property.files;
          return (
            <PropTemplate
              svg={
                <Image
                  src={`/icons/properties/${theme}/file.svg`}
                  width={24}
                  height={24}
                  alt="file"
                />
              }
              key={property.id}
            >
              {files.map((file) => (
                <Link href={file.file.url} key={file.file.url} className={s.fileLinkText}>
                  {file.name}
                </Link>
              ))}
            </PropTemplate>
          );
        } else {
          return null;
        }
      }
    default:
      return null;
  }
};

export default TaskProperty;
