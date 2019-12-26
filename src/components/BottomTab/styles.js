import styled from 'styled-components'
import {screen} from '../../config'
import colors from '../../style/colors'
import {Icon} from 'native-base'
import {BordelessTouch} from '../Touchable'

export const Row = styled.View`
  flex-direction: row;
  width: ${screen.width};
  height: 50;
  background-color: ${colors.darkGray};
  justify-content: space-around;
`

export const Option = styled(BordelessTouch).attrs({})`
  width: 100;
  height: 100%;
  border-top-width: 1px;
  border-color: ${props => props.borderColor || colors.darkGray};
  justify-content: space-evenly;
  align-items: center;
`
export const OptionIcon = styled(Icon)`
  font-size: 20;
  color: ${props => props.color || colors.white};
`

export const Caption = styled.Text`
  font-size: 12px;
  color: ${props => props.color || colors.white};
`
