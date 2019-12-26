import styled from 'styled-components'
import colors from '../style/colors'
import {fontes} from '../config'

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.primary};
  font-family: ${fontes.strong};
  text-align: ${props => props.textAlign || 'left'};
`
