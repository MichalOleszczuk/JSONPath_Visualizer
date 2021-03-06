import React, { memo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NavBar from './components/NavBar';

export interface IDashboardProps extends RouteComponentProps {
  children: React.ReactNode;
}

function Dashboard(props: IDashboardProps) {
  return (
    <div className='vh-100'>
      <NavBar {...props} />
      <div id='dashboardContent'>{props.children}</div>
    </div>
  );
}

export default memo(Dashboard);
