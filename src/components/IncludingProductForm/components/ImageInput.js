import React, {useRef, useState} from "react";

const ImageInput = ({label,name,type,className,register}) => {
    const nameForReg = name;
    const inputImgField = useRef(null)
    const [inputValue, setInputValue] = useState('')
    return(
        <div className={className}>
            <label>{label}</label>
            <input 
                name={name} 
                type={type} 
                {...register(nameForReg)} 
                accept="image/*"
                ref={inputImgField}
                onChange={(data)=>setInputValue(data.target.value)}
            />
            <div className="img-preview">{inputValue}</div>
            <label 
                id="imgLabel" 
                htmlFor={name}
                onClick={()=>{inputImgField.current.click()}}
            > 
                Escolha a imagem
            </label>
        </div>
    )
}
export default ImageInput;

