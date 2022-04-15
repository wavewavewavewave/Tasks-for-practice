import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import styled from 'styled-components'


const Button = styled.button`
  background-color: #3949ab;
  border-radius: 5px;
  color: white;
  margin: 0 1px;
  padding: 5px 15px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  text-transform: uppercase;
`

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />

    // <Button className={finalClassName}
    // {...restProps}></Button>

)
}

export default SuperButton
