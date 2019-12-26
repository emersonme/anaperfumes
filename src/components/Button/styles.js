import styled from 'styled-components'
import {Touch} from '../Touchable'
import colors from '../../style/colors'
import {fontes} from '../../config'

export const Box = styled(Touch)`
  width: 300;
  height: 45;
  background-color: ${colors.primary};
  border-radius: 6;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-family: ${fontes.strong};
  color: ${colors.dark};
  font-size: 16;
`
