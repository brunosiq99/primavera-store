import React from "react";

const TextArea = ({label,name,type,className,register}) => {
    const nameForReg = name;
    return(
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <textarea cols="40" rows="5" {...register(nameForReg)} name={name} type={type}/>
        </div>
    )
}
export default TextArea;

