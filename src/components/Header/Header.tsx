import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import s from './Header.module.scss';

interface Props {
  links: {
    redirectUrl: string;
    text: string;
  }[];
}

const Header = ({ links }: Props) => {
  return (
    <header>
      <p className={cn(s.text)}>Header</p>
      {links.map((link, index) => (
        <Link href={link.redirectUrl} key={index}>
          {link.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
