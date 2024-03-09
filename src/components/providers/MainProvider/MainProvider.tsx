'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import RecoilRootWrapper from 'src/recoil/RecoilRootWrapper';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => (
  <RecoilRootWrapper>
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  </RecoilRootWrapper>
);
