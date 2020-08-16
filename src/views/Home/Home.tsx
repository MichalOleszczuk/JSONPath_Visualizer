import React, { memo } from 'react';
import { Col, Container, FormControl, Row, Spinner } from 'react-bootstrap';
import JSONTree from 'react-json-tree';
import { RouteComponentProps } from 'react-router-dom';
import { useHome } from './useHome';

function Home(_props: RouteComponentProps) {
  const { jsonQuery, json, inProgress, error, onChangeQuery } = useHome();

  return (
    <Container className='h-100 text-dark pt-3 pb-3'>
      <Row>
        <Col className='pl-3 pr-3 pb-3'>
          <FormControl placeholder='Type your json path query' value={jsonQuery} onChange={onChangeQuery} />
        </Col>
      </Row>
      <Row>
        <Col className='pl-3 pr-3'>
          {inProgress ? (
            <div className='d-flex justify-content-center align-items-center'>
              <Spinner animation='border' variant='light' />
            </div>
          ) : (
            <>
              {error.length > 0 ? (
                <div className='d-flex justify-content-center align-items-center'>{error}</div>
              ) : (
                <JSONTree data={json} />
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default memo(Home);
