/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import {Title} from '../../components/Title'
import {Container} from '../../components/Container'
import Input from '../../components/Input'
import Picker from '../../components/Picker'
import Button from '../../components/Button'
import {Header, Form, Footer} from './styles'
import api from '../../services/api'
import Loading from '../../components/Loading'
import {Alert} from 'react-native'
import moment from 'moment'

export default function index({navigation}) {
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [valor, setValor] = useState('')
  const [marcas, setMarcas] = useState([])
  const [marca, setMarca] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getMarcas()
  }, [])

  useEffect(() => {
    if (marcas.length > 0) {
      setMarca(marcas[0])
    }
  }, [marcas])

  async function getMarcas() {
    try {
      const {data, status} = await api.get('marcas')
      if (status === 200) {
        setMarcas(data)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  async function onSave() {
    const lancamento = {
      MARCAID: marca.ID,
      DESCRICAO: produto,
      TOTAL: parseFloat(valor),
      QUANTIDADE: parseInt(quantidade, 10),
      DATA: moment().format('YYYY-MM-DD HH:MM:SS'),
    }
    try {
      const {status} = await api.post('lancamento', lancamento)
      if (status === 200) {
        Alert.alert('', 'Lançamento salvo com sucesso!')
      }
    } catch (error) {
      Alert.alert('', error.message)
    } finally {
      setLoading(false)
    }
  }

  function handleAmountChange(value) {
    const newValue = value.replace(',', '.')
    setValor(newValue)
  }

  return (
    <>
      <Container>
        <Header>
          <Title textAlign={'left'}>Novo Lançamento</Title>
        </Header>
        {isLoading ? (
          <Loading />
        ) : (
          <Form>
            <Input
              placeholder={'Produto'}
              value={produto}
              onChangeText={value => setProduto(value)}
            />
            <Input
              placeholder={'Quantidade'}
              value={quantidade.toString()}
              keyboardType="number-pad"
              onChangeText={value => setQuantidade(value)}
            />
            <Input
              placeholder={'Total (R$)'}
              value={valor}
              keyboardType="number-pad"
              onChangeText={handleAmountChange}
            />
            <Picker
              placeholder={'Marca'}
              value={marca}
              data={marcas}
              onValueChange={(itemValue, itemIndex) => setMarca(itemValue)}
            />
            <Footer>
              <Button text={'Salvar'} onPress={onSave} />
            </Footer>
          </Form>
        )}
      </Container>
    </>
  )
}
