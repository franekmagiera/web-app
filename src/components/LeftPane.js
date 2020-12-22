import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DataSourceEnum from './DataSourceEnum.js';
import SearchEntitiesForm from './SearchEntitiesForm.js';
import SparqlForm from './SparqlForm.js';

const LeftPane = (props) => {
    const [dataSource, setDataSource] = useState(DataSourceEnum.SEARCH_ENTITIES);

    useEffect(() => {
        props.onDataSourceChange(dataSource);
    });

    const componentMapping = Object.freeze({
        [DataSourceEnum.SEARCH_ENTITIES]: <SearchEntitiesForm onSearch={props.onSearch} />,
        [DataSourceEnum.SPARQL_QUERY]: <SparqlForm onSearch={props.onSearch} />
    });

    return (
        <div className='leftPaneForm'>
            <Form>
                <FormGroup>
                    <Label for='Data-source'>Data source</Label>
                    <Input type='select' name='select' onChange={event => setDataSource(event.target.value)}>
                        {Object.entries(DataSourceEnum.properties).map(([key, properties]) => <option value={key}>{properties.label}</option>)};
                    </Input>
                </FormGroup>
            </Form>
            {componentMapping[dataSource]}
        </div>
    );
};

export default LeftPane;