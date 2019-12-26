import styled from 'styled-components'
import {ScrollView} from 'react-native'

export const Header = styled.View`
  margin: 10px 22px;
`

export const Form = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
`

export const Footer = styled.View`
  height: 450;
  align-items: center;
  justify-content: center;
`
