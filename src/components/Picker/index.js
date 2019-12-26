import React from 'react'
import {Content, Placeholder} from '../Input/styles'
import {Picker} from 'react-native'
import colors from '../../style/colors'

const index = ({value, placeholder, onValueChange, data}) => {
  return (
    <Content>
      <Placeholder>{placeholder}</Placeholder>
      <Picker
        mode={'dropdown'}
        selectedValue={value}
        style={{marginLeft: 5, width: '90%'}}
        onValueChange={onValueChange}>
        {data.map(item => (
          <Picker.Item
            key={item.ID}
            label={item.DESCRICAO}
            value={item}
            color={colors.primary}
          />
        ))}
      </Picker>
    </Content>
  )
}

export default index
