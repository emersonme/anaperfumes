import styled from 'styled-components'
import {Icon} from 'native-base'
import colors from '../../style/colors'

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 40px;
  height: 70;
`
export const LeftIcon = styled(Icon).attrs({
  name: 'left',
  type: 'AntDesign',
})`
  font-size: 30px;
  color: ${props => props.color || colors.darkGray};
`

export const RightIcon = styled(Icon).attrs({
  name: 'right',
  type: 'AntDesign',
})`
  font-size: 30px;
  color: ${props => props.color || colors.darkGray};
`
