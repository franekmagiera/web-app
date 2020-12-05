import React, { useState } from 'react';
import { Button, ButtonGroup, Navbar, NavbarBrand, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    return (
        <div>
            <Navbar color='dark' dark expand='md'>
                <ButtonGroup>
                    <Button href='https://github.com/franekmagiera/web-app' color='dark' role='link'>
                        <FontAwesomeIcon icon={faGithub} color='dark' size='2x' fixedWidth />
                    </Button>
                    <Button onClick={toggleModal} color='dark'> 
                        <FontAwesomeIcon icon={faQuestionCircle} size='2x' fixedWidth />
                    </Button>
                </ButtonGroup>
                <NavbarBrand className='mx-auto order-0'>Wikidata seeker</NavbarBrand>
            </Navbar>
            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>About wikidata seeker</ModalHeader>
                <ModalBody>
                    Wikidata seeker enables you to get data from wikidata.org. For more information visit project's GitHub page.
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Header;
