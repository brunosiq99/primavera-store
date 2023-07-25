import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
// components
import Input from "./components/Input";
import MoneyInput from "./components/MoneyInput";

import TextArea from "./components/TextArea";
import ImageInput from "./components/ImageInput";

const StyledIncludingProductForm = styled.section`
    // general
    align-items: center;
    background-color: rgba(0,0,0,0.85);
    box-shadow: #111 0.5rem 0.5rem;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    form{
        background-color: #111;
        display: inline-block;
        padding: 1rem 2rem 2rem;
        max-width: 460px;
        text-align: center;
        width: 75%;
        // box-shadow
        box-shadow: 10px 10px 18px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 18px -1px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 18px -1px rgba(0,0,0,0.75);
    }
    .regular-input{
        display: grid;
        gap: 0.5rem;
        margin: 1rem 0;
        width: 100%;
    }
    .regular-input input, .regular-input textarea{
        background-color: #353535;
        border: none;
        box-sizing: border-box;
        color: #fdfdfd;
        height: 2.5rem;
        padding: 0.25rem 1rem;
        font-size: 1.25rem;
        width: 100%;
    }
    .regular-input textarea{
        height: 8rem;
    }
    label{
        color: #fdfdfd;
    }

    /* ImageInput
    #imgLabel{
        background-color: #353535;
        cursor: pointer;
        height: 2.5rem;
        line-height: 2.5rem;
        position: relative;
        text-align: center;
        transition: 0.5s;
        width: 100%
    }
    input[type="file"]{
        display: none;
    }
    #imgLabel:hover{
        background-color: #fdfdfd;
        color: #353535;
    }
    .img-preview{
        background-color: #303030;
        color: #ededed;
        font-size: 0.75rem;
        margin-bottom: -0.5rem;
        width: 100%;
    }
    */

    // submit button
    .submit-button{
        background-color: #49c359;
        border: none;
        border-radius: 0;
        color: #fdfdfd;
        cursor: pointer;
        font-size: 1.25rem;
        height: 2.5rem;
        width: 100%;
    }
    .submit-button:hover{
        background-color: #39ad48;
        opacity: 1;
    }
`
const IncludingProductForm = () => {
    //register fields of form
    const { register, handleSubmit, formState: {errors}} = useForm();
    const addProduct = (data) => {
        console.log(data)
    }

    return(
        <StyledIncludingProductForm>
            <form
                onSubmit={handleSubmit(addProduct)}
            >
                <Input
                    label="Nome" 
                    name="productName"
                    type="text"
                    className="regular-input"
                    register={register}
                />
                <MoneyInput 
                    label="Valor" 
                    name="productValue"
                    className="regular-input"
                    register={register}
                />
                <Input
                    label="Imagem" 
                    name="productImg"
                    type="text"
                    className="regular-input"
                    register={register}
                />
                <TextArea 
                    label="Descrição" 
                    name="productDescription"
                    className="regular-input"
                    register={register}
                />
                <button
                    className="submit-button"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </StyledIncludingProductForm>
    )
}
export default IncludingProductForm;