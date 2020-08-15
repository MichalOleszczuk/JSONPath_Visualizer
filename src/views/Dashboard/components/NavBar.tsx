import React, { memo } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { HOME_PAGE } from '../../../config/paths';

function NavBar({ history }: RouteComponentProps) {
  return (
    <Navbar bg='dark' variant='light' className='fixed-top'>
      <Navbar.Brand className='text-white'>JSONPath Visualizer</Navbar.Brand>
      <Navbar.Collapse id='navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link className='text-white' onClick={() => history.push(HOME_PAGE)}>
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(NavBar);
