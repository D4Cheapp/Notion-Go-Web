import React from 'react';
import ListedTask from '../../../../../components/ListedTask';
import s from './TodoSection.module.scss';

interface Props {
  colors: {
    background: string;
    secondBackground: string;
    textColor: string;
    secondText: string;
    green: string;
  };
}

const TodoSection = ({ colors }: Props): React.ReactNode => {
  return (
    <div className={s.root} style={{ color: colors.textColor }}>
      <div className={s.header} style={{ backgroundColor: colors.secondBackground }}>
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} className={s.icon}>
          <path
            fill={colors.textColor}
            d="M13.636 30c-1.886 0-3.659-.375-5.318-1.125a13.754 13.754 0 0 1-4.33-3.054c-1.227-1.285-2.198-2.797-2.914-4.535C.358 19.548 0 17.69 0 15.714s.358-3.833 1.074-5.571c.716-1.738 1.687-3.25 2.915-4.536a13.754 13.754 0 0 1 4.33-3.053c1.658-.75 3.431-1.125 5.317-1.125.978 0 1.92.1 2.83.303a13.4 13.4 0 0 1 2.625.875v3.214a11.21 11.21 0 0 0-2.574-1.125c-.92-.273-1.88-.41-2.88-.41-3.023 0-5.597 1.113-7.722 3.339s-3.188 4.923-3.188 8.09c0 3.166 1.063 5.862 3.188 8.089 2.125 2.226 4.699 3.339 7.721 3.339 3.023 0 5.597-1.113 7.722-3.34 2.125-2.226 3.188-4.922 3.188-8.089 0-.762-.074-1.5-.222-2.214a13.923 13.923 0 0 0-.597-2.071h2.932c.205.69.358 1.386.46 2.089.103.702.154 1.434.154 2.196 0 1.976-.358 3.834-1.074 5.572-.716 1.738-1.688 3.25-2.915 4.535a13.755 13.755 0 0 1-4.33 3.054c-1.659.75-3.431 1.125-5.318 1.125Zm10.91-21.429V5.714h-2.728V2.857h2.727V0h2.728v2.857H30v2.857h-2.727v2.857h-2.727Zm-6.137 5.715c.568 0 1.051-.209 1.449-.625.398-.417.596-.923.596-1.518s-.198-1.101-.596-1.518A1.928 1.928 0 0 0 18.409 10c-.568 0-1.051.208-1.449.625a2.118 2.118 0 0 0-.596 1.518c0 .595.198 1.101.596 1.518.398.416.88.625 1.45.625Zm-9.545 0c.568 0 1.05-.209 1.448-.625.398-.417.597-.923.597-1.518s-.199-1.101-.597-1.518A1.928 1.928 0 0 0 8.864 10c-.569 0-1.052.208-1.45.625a2.117 2.117 0 0 0-.596 1.518c0 .595.2 1.101.597 1.518.397.416.88.625 1.449.625Zm4.772 9.285a6.994 6.994 0 0 0 4.21-1.375c1.262-.916 2.177-2.125 2.745-3.625H6.68c.569 1.5 1.484 2.709 2.745 3.625a6.994 6.994 0 0 0 4.21 1.375Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={s.icon}>
          <path
            fill={colors.textColor}
            d="M10.286 13.714H0v-3.428h10.286V0h3.428v10.286H24v3.428H13.714V24h-3.428V13.714Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={34} height={20} className={s.icon}>
          <circle cx={30} cy={10} r={4} fill={colors.textColor} />
          <circle cx={17} cy={10} r={4} fill={colors.textColor} />
          <circle cx={4} cy={10} r={4} fill={colors.textColor} />
        </svg>
      </div>
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
