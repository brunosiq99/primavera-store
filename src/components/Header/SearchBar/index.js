import React from "react"
import { styled } from "styled-components"
const StyledSearchBar = styled.div`
    display: none;
    @media screen and (min-width: 980px) {
        display: block;
    }
`
const SearchBar = ({SearchBarConfig}) => {
    return(
        <StyledSearchBar>
            SearchBar
        </StyledSearchBar>
    )
}
export default SearchBar;