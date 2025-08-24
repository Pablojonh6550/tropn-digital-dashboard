import React from 'react';
import { InputProps } from "@/interfaces/Input/InputInterface";

const Input: React.FC<InputProps> = (props) => {
    return (
        <div className="input-container">
            <label htmlFor="input">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

export default Input;