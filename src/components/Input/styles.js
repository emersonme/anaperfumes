import styled from 'styled-components'
import colors from '../../style/colors'
import {fontes} from '../../config'
import {TextInput} from 'react-native-gesture-handler'

export const Content = styled.View`
  background-color: ${colors.dark};

  margin: 10px 20px;
  border-radius: 6px;
  border-color: ${colors.darkGray};
  border-width: 1;
`
export const Placeholder = styled.Text`
  font-family: ${fontes.primaria};
  font-size: 14;
  color: ${'#9e9e9e'};
  margin-top: 5px;
  margin-left: 10px;
`

export const TInput = styled(TextInput).attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
})`
  height: 32px;
  background-color: ${colors.dark};
  color: ${colors.white};
  margin-left: 5px;
  font-family: ${fontes.primaria};
  font-size: 16;
  margin-left: 10px;
  padding-vertical: 5px;
  padding-horizontal: 0px;
`
