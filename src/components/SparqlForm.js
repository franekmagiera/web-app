import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { executeQuery } from '../api/api.js';

const SparqlForm = (props) => {
    const placeholderQuery =
       `SELECT ?continent ?continentLabel
        WHERE
        {
        ?continent wdt:P31 wd:Q5107.
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
        }
        ORDER BY xsd:integer(SUBSTR(STR(?continent),STRLEN("http://www.wikidata.org/entity/Q")+1))    
    `;

    const [query, setQuery] = useState(placeholderQuery);
    const [showAlert, setShowAlert] = useState(false);

    const execute = async () => {
        if (!query) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            const result = await executeQuery(query);
            props.onSearch(result);
        }

    };

    // TODO: fix placeholder, figure out how to visualize data.

    return (
        <div>
            <Form>
                <FormGroup>
                    <Alert color='danger' isOpen={showAlert} toggle={() => setShowAlert(false)}>
                        Query field cannot be empty!
                    </Alert>
                    <Label for='sparql-query'>SPARQL query</Label>
                    <Input type='textarea' name='query' className='textareaQuery' wrap='off' placeholder={placeholderQuery} onChange={event => setQuery(event.target.value)}></Input>
                </FormGroup>
            </Form>
            <Button color='primary' onClick={execute}>Execute</Button>
        </div>
    );
}

export default SparqlForm;