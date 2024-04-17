import React from 'react';
import { Metadata } from 'next';
import Providers from '../components/Providers';

export const metadata: Metadata = {
  title: 'Notion Go',
  description:
    'Notion Go is a simple to-do application, integrated with the notion \n' +
    'databases and making work easier and smoother',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props): React.ReactNode => {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  );
};

export default RootLayout;
