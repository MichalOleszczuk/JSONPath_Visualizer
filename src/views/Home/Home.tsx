import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { memo } from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import JSONTree from 'react-json-tree';
import { RouteComponentProps } from 'react-router-dom';
import { useHome } from './useHome';

library.add(faPlus, faMinus);

function Home(_props: RouteComponentProps) {
  const { jsonQuery, json, onChangeQuery } = useHome();

  return (
    <Container className='h-100 text-dark pt-3 pb-3'>
      <Row>
        <Col className='pl-3 pr-3 pb-3'>
          <FormControl placeholder='Type your json path query' value={jsonQuery} onChange={onChangeQuery} />
        </Col>
      </Row>
      <Row>
        <Col className='pl-3 pr-3'>
          <JSONTree data={json} />
        </Col>
      </Row>
    </Container>
  );
}

export default memo(Home);
