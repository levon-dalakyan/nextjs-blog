import { Fragment, FC, ReactNode } from 'react';

import { MainNavigation } from './main-navigation';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};
