export type ColorNamesTypes =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';
export type TaskTextType = {
  annotations: {
    bold: boolean;
    code: boolean;
    color: ColorNamesTypes;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  href: null | string;
  plain_text: string | null;
  text: { content: string; link: null | string };
  type: 'text';
};
type TaskPropertyTemplateType<T, Y extends string> = {
  [key in Y]: T;
} & {
  id: string;
  type: Y;
};
export type TitlePropertyType = {
  id: 'title';
  title: TaskTextType[];
  type: 'title';
};
type TextPropertyType = TaskPropertyTemplateType<TaskTextType[], 'rich_text'>;
type NumberPropertyType = TaskPropertyTemplateType<number, 'number'>;
type SelectPropertyType = TaskPropertyTemplateType<
  {
    color: ColorNamesTypes;
    id: string;
    name: string;
  },
  'select'
>;
type MultiSelectPropertyType = TaskPropertyTemplateType<
  { color: ColorNamesTypes; id: string; name: string }[],
  'multi_select'
>;
type StatusPropertyType = TaskPropertyTemplateType<
  { color: ColorNamesTypes; id: string; name: string },
  'status'
>;
type DatePropertyType = TaskPropertyTemplateType<
  {
    end?: string;
    start: string;
    time_zone?: null;
  },
  'date'
>;
type FilesPropertyType = TaskPropertyTemplateType<
  { file: { expiry_time: string; url: string }; name: string; type: 'file' }[],
  'files'
>;
type CheckboxPropertyType = TaskPropertyTemplateType<boolean, 'checkbox'>;
type UrlPropertyType = TaskPropertyTemplateType<string, 'url'>;
type EmailPropertyType = TaskPropertyTemplateType<string, 'email'>;
type PhonePropertyType = TaskPropertyTemplateType<string, 'phone_number'>;
type LastEditedTimePropertyType = TaskPropertyTemplateType<string, 'last_edited_time'>;
type IdPropertyType = TaskPropertyTemplateType<{ number: number; prefix: null }, 'unique_id'>;
type CreatedTimePropertyType = {
  created_time: string;
  description: string;
  id: string;
  name: string;
  type: 'created_time';
};
export type TaskPropertyType =
  | IdPropertyType
  | TextPropertyType
  | TitlePropertyType
  | NumberPropertyType
  | DatePropertyType
  | SelectPropertyType
  | CheckboxPropertyType
  | UrlPropertyType
  | EmailPropertyType
  | PhonePropertyType
  | CreatedTimePropertyType
  | LastEditedTimePropertyType
  | FilesPropertyType
  | StatusPropertyType
  | MultiSelectPropertyType;
