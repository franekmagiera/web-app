import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { executeQuery } from '../api/api.js';

const SparqlForm = (props) => {
    const exampleQuery =
`SELECT ?continent ?continentLabel
WHERE
{
    ?continent wdt:P31 wd:Q5107.
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY xsd:integer(SUBSTR(STR(?continent),STRLEN("http://www.wikidata.org/entity/Q")+1))`;

    const [query, setQuery] = useState(exampleQuery);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    const execute = async () => {
        if (!query) {
            setAlertText('Query field cannot be empty!');
            setShowAlert(true);
        } else {
            setShowAlert(false);
            try {
                const result = await executeQuery(query);
                props.onSearch(result);
            } catch (error) {
                setAlertText(error.message);
                setShowAlert(true);
            }
        }

    };

    return (
        <div>
            <Form>
                <FormGroup>
                    <Alert color='danger' isOpen={showAlert} toggle={() => setShowAlert(false)}>{alertText}</Alert>
                    <Label for='sparql-query'>SPARQL query</Label>
                    <Input type='textarea' name='query' className='textareaQuery' wrap='off' value={query} spellcheck='false' onChange={event => setQuery(event.target.value)} />
                </FormGroup>
            </Form>
            <Button color='primary' onClick={execute}>Execute</Button>
        </div>
    );
};

export default SparqlForm;
