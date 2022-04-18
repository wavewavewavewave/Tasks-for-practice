import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 13px;
  padding: 3px;
  margin: 3px;
  background: white;
  border: 1px;
  border-radius: 20px;
  ::placeholder {
    color: palevioletred;
  }
`;

function AlternativeSuperInputText() {
    return (
        <Input/>
    )
}

export default AlternativeSuperInputText
