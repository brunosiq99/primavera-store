import React from "react";

const Input = ({label,name,type,className,inputClassName,register}) => {
    const nameForReg = name;
    return(
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} {...register(nameForReg)} className={inputClassName}/>
        </div>
    )
}
export default Input;

