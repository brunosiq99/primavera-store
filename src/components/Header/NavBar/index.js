import React from "react"
import { styled } from "styled-components"
const StyledNavBar = styled.nav`
    display: none;
    @media screen and (min-width: 980px) {
        display: inline;
        width: 100vw;
    }
`
const NavBar = ({NavBarConfig}) => {
    return(
        <StyledNavBar>
            NavBar
        </StyledNavBar>
    )
}
export default NavBar;