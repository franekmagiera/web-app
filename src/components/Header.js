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
                <NavbarBrand className='mx-auto order-0'>Wikidata Explorer</NavbarBrand>

                <Tooltip placement='bottom' isOpen={showTooltip} target='tooltip-about' toggle={toggleTooltip}>
                    <h6>About Wikidata Explorer</h6>
                    <span>Wikidata Explorer let's you search for entities present in wikidata.org end execute SPARQL queries. For more information, visit project's GitHub page by clicking on the icon next to the question mark.</span>
                </Tooltip>
            </Navbar>
        </div>
    )
}

export default Header;
