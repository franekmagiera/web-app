import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import SearchEntitiesForm from './SearchEntitiesForm.js';
import SparqlForm from './SparqlForm.js';

const LeftPane = (props) => {
    const [form, setForm] = useState('Search entities');
    const options = {
        'Search entities': <SearchEntitiesForm onSearch={props.onSearch} />,
        'SPARQL query': <SparqlForm onSearch={props.onSearch} />
    };

    return (
        <div className='leftPaneForm'>
            <Form>
                <FormGroup>
                    <Label for='Data-source'>Data source</Label>
                    <Input type='select' name='select' onChange={event => setForm(event.target.value)}>
                        {Object.keys(options).map(opt => <option>{opt}</option>)};
                    </Input>
                </FormGroup>
            </Form>
            {options[form]}
        </div>

    );
};

export default LeftPane;