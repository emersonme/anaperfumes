import React from 'react'
import {Box, Text} from './styles'

const index = ({text, onPress}) => {
  return (
    <Box onPress={onPress}>
      <Text>{text}</Text>
    </Box>
  )
}

export default index
