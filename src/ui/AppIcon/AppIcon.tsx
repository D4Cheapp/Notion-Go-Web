import React, { memo } from 'react';
import Image from 'next/image';
import { useTheme } from '@/src/hooks/useTheme';

const AppIcon = memo(function AppIcon(): React.ReactNode {
  const [theme] = useTheme();
  return (
    <Image
      src={theme === 'light' ? '/icons/logos/lightIcon.svg' : '/icons/logos/darkIcon.svg'}
      alt="Notion Go"
      width={50}
      height={50}
    />
  );
});

export default AppIcon;
