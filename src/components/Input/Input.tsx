/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css'
import { InputProps } from './types';
function Input({
    placeholder, 
    name, 
    value, 
    type='text', 
    onChange, 
    label, 
    id
} : InputProps) {
    return (
    <div className='input-container'>
    <label className='label-input' htmlFor={id}>{label}</label>
    <input 
    className="input-component" 
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    id={id} /> 
    </div>
    )
}

export default Input;