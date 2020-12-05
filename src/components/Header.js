import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarText, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const toggleTooltip = () => setShowTooltip(!showTooltip);

    return (
        <div>
            <Navbar color='dark' dark expand='md'>
                <NavbarText>
                <FontAwesomeIcon icon={faQuestionCircle} size='2x' id='tooltip-about' color='white' fixedWidth/>
                <a href='https://github.com/franekmagiera/web-app'>
                    <FontAwesomeIcon icon={faGithub} size='2x' fixedWidth />
                </a>
                </NavbarText>
                <NavbarBrand className='mx-auto order-0'>Wikidata Seeker</NavbarBrand>

                <Tooltip placement='bottom' isOpen={showTooltip} target='tooltip-about' toggle={toggleTooltip}>
                    <h6>About Wikidata Seeker</h6>
                    <span>Wikidata Seeker let's you search for entities present in wikidata.org. For more information, visit project's GitHub page by clicking on the icon next to the question mark.</span>
                </Tooltip>
            </Navbar>
        </div>
    )
}

export default Header;
