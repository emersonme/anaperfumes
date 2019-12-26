import React from 'react'
import {Content, Placeholder, TInput} from './styles'

const index = ({value, placeholder, onChangeText, keyboardType}) => {
  return (
    <Content>
      <Placeholder>{placeholder}</Placeholder>
      <TInput
        // ref={refNumberTInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </Content>
  )
}

export default index
