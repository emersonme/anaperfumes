import styled from 'styled-components'
import {Icon} from 'native-base'
import colors from '../../style/colors'
import {screen} from '../../config'

export const Body = styled.View``

export const Divider = styled.View`
  height: 0;
  width: ${screen.width};
  border-width: 0.5;
  border-color: ${colors.darkGray};
`
