import React, { memo } from 'react';
import Image from 'next/image';

interface Props {
  width: number;
  height: number;
}

const AppIcon = memo(function AppIcon({ width, height }: Props): React.ReactNode {
  return <Image src={'/icons/logos/raw.svg'} alt="Notion Go" width={width} height={height} />;
});

export default AppIcon;
