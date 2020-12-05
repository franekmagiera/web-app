// Currently only using it for the form.
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import searchEntities from '../api/searchEntities.js' 

const LeftPane = (props) => {
    const [entity, setEntity] = useState('');
    const [language, setLanguage] = useState('en');

    const onSearchClick = async () => {
        if (!entity) {
            console.log('Show alert - entity field cannot be empty!');
        } else {
            const result =  await searchEntities(entity, language);
            props.onSearch(result);
        }
    }

    return (
        <div className='form'>
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