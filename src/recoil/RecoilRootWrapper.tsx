'use client';

import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: ReactNode;
};

function RecoilRootWrapper({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;
