// Currently only using it for the form.
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import searchEntities from '../api/searchEntities.js' 

const LeftPane = (props) => {
    const [entity, setEntity] = useState('');
    const [language, setLanguage] = useState('en');
    const [showAlert, setShowAlert] = useState(false);

    const onSearchClick = async () => {
        if (!entity) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            const result =  await searchEntities(entity, language);
            props.onSearch(result);
        }
    }

    return (
        <div className='form'>
            <Alert color='danger' isOpen={showAlert} toggle={() => setShowAlert(false)}>
                Entity field cannot be empty!
            </Alert>
            <Form>
                <FormGroup>
                    <Label for='search'>Entity</Label>
                    <Input placeholder='What entity do you want to search for?' onChange={event => setEntity(event.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for='language'>Language</Label>
                    <Input type='select' name='select' onChange={event => setLanguage(event.target.value)}>
                        <option>en</option>
                        <option>pl</option>
                    </Input>
                </FormGroup>
            </Form>
            <Button color='primary' onClick={onSearchClick}>Search</Button>
        </div>
    );

};

export default LeftPane;