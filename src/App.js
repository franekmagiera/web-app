import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header.js';
import LeftPane from './components/LeftPane.js';
import RightPane from './components/RightPane.js';
import DataSourceEnum from './components/DataSourceEnum.js';

function App() {
  const [data, setData] = useState(null);
  const [dataSourceType, setDataSourceType] = useState(null);

  const onExportClick = () => {
    const textData = JSON.stringify(data);
    const blob = new Blob([textData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'export.json';
    link.href = url;
    link.click();
  };

  const sizeMapping = Object.freeze({
    [DataSourceEnum.SEARCH_ENTITIES]: {
      first: '3',
      second: '9'
    },
    [DataSourceEnum.SPARQL_QUERY]: {
      first: '6',
      second: '6'
    }
  });

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={dataSourceType ? sizeMapping[dataSourceType].first : '3'} className='leftPaneCol'>
              <LeftPane setData={setData} onDataSourceChange={setDataSourceType} />
              <div className='exportButton'>
                <Button color='secondary' onClick={onExportClick} disabled={!data} block>Export</Button>
              </div>
          </Col>
          <Col sm={dataSourceType ? sizeMapping[dataSourceType].second : '9'} className='rightPanelCol'>
              <RightPane data={data} dataSourceType={dataSourceType} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
