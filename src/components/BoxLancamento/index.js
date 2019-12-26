import React from 'react'
import {Row, Logo, MyTouch, Descricao, Info, Left, Total, Right} from './styles'
import colors from '../../style/colors'
import {Touch} from '../Touchable'

const index = ({IMAGE_LINK, DESCRICAO, type, QUANTIDADE, TOTAL}) => {
  return (
    <MyTouch>
      <Row borderColor={colors.primary}>
        <Left>
          <Logo source={{uri: IMAGE_LINK}} />
        </Left>

        <Info>
          <Descricao>{DESCRICAO}</Descricao>
          <Descricao>{QUANTIDADE} unidade</Descricao>
        </Info>
        <Right>
          <Total>R$ {TOTAL}</Total>
        </Right>
      </Row>
    </MyTouch>
  )
}

export default index
