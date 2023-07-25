import React from "react";
import { styled } from "styled-components";

// components
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const StyledHeader = styled.header`
    background-color: #000;
    color: #fdfdfd;
    .header__container{
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    .white-logo{
        width: 8rem;
        filter: invert(1)
    }
    .transparent-button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .button-icon{
        color: #fdfdfd;
        width: 2rem;
    }
    .cart-div{
        display: flex;
        align-items: center;
    }
    .cart-div label{
        display: none;
    }
    .sub-header{
        background-color: #555;
    }
    @media screen and (min-width: 720px){
        
    }
    @media screen and (min-width: 980px){
        .search-button{
            display: none;
        }
        .cart-div label{
            display: block;
        }
    }
`
const Header = ({headerConfig}) => {
    return(
        <StyledHeader>
            <div className="container header__container">
                <MobileNav />
                <img className="white-logo" src="img/primavera_black.png" />
                <button className="transparent-button search-button">
                    <FontAwesomeIcon className="button-icon" icon={faMagnifyingGlass}/>
                </button>
                <SearchBar />
                <div className="cart-div">
                    <button name="cartButton" className="transparent-button">
                        <FontAwesomeIcon className="button-icon" icon={faCartShopping}/>
                    </button>
                    <label htmlFor="cartButton">Carrinho</label>
                </div>
            </div>
            <div className="sub-header">
                <div className="container sub-header__container">
                    <NavBar />
                </div>
            </div>
        </StyledHeader>
    )
}
export default Header;