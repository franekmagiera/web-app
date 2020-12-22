import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header.js';
import LeftPane from './components/LeftPane.js';
import RightPane from './components/RightPane.js';

function App() {
  const [data, setData] = useState(null);
  const [dataSourceType, setDataSourceType] = useState(null);

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col sm='3' className='leftPaneCol'>
              <LeftPane setData={setData} onDataSourceChange={setDataSourceType} />
          </Col>
          <Col sm='9' className='rightPanelCol'>
              <RightPane data={data} dataSourceType={dataSourceType} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
