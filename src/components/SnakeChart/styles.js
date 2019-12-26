import styled from 'styled-components'
import {ScrollView} from 'react-native'
import {screen} from '../../config'

export const Container = styled.View`
  height: 180;
`

export const Horizontal = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``
