import styled from 'styled-components'
import colors from '../../style/colors'
import {Image, View} from 'react-native'
import {Touch} from '../Touchable'
import {fontes} from '../../config'

export const MyTouch = styled(Touch)`
  margin-top: 10px;
  margin-horizontal: 10px;
  border-radius: 6;
  background-color: ${colors.darkGray};
`
export const Row = styled(View)`
  flex-direction: row;
  border-radius: 6;
  align-items: center;
  border-start-width: 6;
  border-color: ${props => props.borderColor};
`
export const Left = styled.View`
  border-bottom-left-radius: 6;
  border-top-left-radius: 6;
  padding: 5px;
`

export const Logo = styled(Image)`
  width: 80;
  height: 70;
`

export const Info = styled.View`
  flex: 0.7;
  height: 60;
  justify-content: space-evenly;
  padding-horizontal: 10px;
`

export const Descricao = styled.Text`
  font-family: ${fontes.primaria};
  font-size: 14;
  color: ${colors.white};
`

export const Right = styled.View`
  flex: 0.3;
`
export const Total = styled.Text`
  font-family: ${fontes.strong};
  font-size: 14;
  color: ${colors.white};
`
