'use client';
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import ChangeThemeIcon from '@/src/ui/ChangeThemeIcon';
import AppIcon from '@/src/ui/AppIcon';
import s from './Header.module.scss';

interface Props {
  links: {
    redirectUrl: string;
    text: string;
  }[];
}

const Header = ({ links }: Props) => {
  return (
    <header className={s.header}>
      <Link href={'/'} className={cn(s.text)}>
        <AppIcon width={40} height={40} />
      </Link>
      {links.map((link, index) => (
        <Link className={s.link} href={link.redirectUrl} key={index}>
          {link.text}
        </Link>
      ))}
      <ChangeThemeIcon />
    </header>
  );
};

export default Header;
