import React from 'react'
import styled from "styled-components";


const Button = styled.button`
  background-color: #3f51b5;
  border-radius: 5px;
  color: white;
  margin: 0 1px;
  padding: 5px 15px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  text-transform: uppercase;
  transition: ease 250ms;
  &:hover {
    background: #283593;
  }
  `

const clickMe = () => {
    return (
        alert('Click Clack')
    )
}

function AlternativeSuperButton() {
    return (
        <Button onClick={clickMe}>
            Button
        </Button>
    )
}

export default AlternativeSuperButton
