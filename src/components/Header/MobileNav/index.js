import React from "react"
import { styled } from "styled-components"

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const StyledMobileNav = styled.nav`
    @media screen and (min-width: 980px) {
        display: none;
    }
`
const MobileNav = ({MobileNavConfig}) => {
    return(
        <StyledMobileNav>
            <button className="button-icon transparent-button"><FontAwesomeIcon icon={faBars} /></button>
        </StyledMobileNav>
    )
}
export default MobileNav;