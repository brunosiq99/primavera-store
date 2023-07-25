import React, { useState } from "react";

const MoneyInput = ({label,name,className,inputClassName}) => {
    const [inputValue, setInputValue] = useState('R$ 0,00');
    const formatter = new Intl.NumberFormat("pt-BR",{
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2
    })
    const handleKeyDown = (e) => {
        let typedValue = e.key;
        let value = e.target.value
        value = value.replace('R$','').replace(/\./g,'').replace(',','.');         // excludes letters, dots and changes "," to "."
        const nonDigitRegex = /\D/g; 

        if(typedValue == 'Backspace'){                                              // Erasing by Backspace key
            const numberToErase = value[value.length - 1];                          // gets last digit
            value = formatter.format((value - numberToErase / 100) / 10);           // excludes last digit. downgrades 1 decimal place and gives it a currency Format
            setInputValue(value);
        }else 
        if(nonDigitRegex.test(typedValue)){                                         // if typedValue is an nonDigit returns
            return
        }else{
            value = value*10;                                                       // upgrades 1 decimal place to add a new cent from typed
            typedValue = typedValue / 100;                                          //transform typed in a cent unit
            value = formatter.format(value + typedValue);                           //give a currency Format to value + typedValue
            setInputValue(value);
        }
    }
    return(
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input value={inputValue} onKeyDown={handleKeyDown} name={name} type="text" className={inputClassName}/>
        </div>
    )
}
export default MoneyInput;

