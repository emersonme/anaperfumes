/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import {Container} from '../../components/Container'
import BoxLancamento from '../../components/BoxLancamento'
import DayPicker from '../../components/DayPicker'
import BarGraph from '../../components/BarGraph'
import {Divider} from './styles'
import {FlatList, RefreshControl} from 'react-native'
import moment from 'moment'
import api from '../../services/api'

export default function index() {
  const [date, setDate] = useState(moment().toDate())
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [lancamentos, setLancamentos] = useState([])

  useEffect(() => {
    setLoading(true)
    getData()
  }, [date])

  useEffect(() => {
    if (data) {
      setLancamentos(data.lancamentos)
    } else {
      setLancamentos([])
    }
  }, [data])

  async function getData() {
    try {
      const {data} = await api.post('dashboard', {
        data: moment(date).format('YYYY-MM-DD'),
      })
      setData(data)

      setLoading(false)
    } catch (error) {
      setData(undefined)
      // alert(error.message)
    }
  }

  return (
    <Container>
      <DayPicker date={date} onDateChange={value => setDate(value)} />
      {!isLoading && data && <BarGraph {...data} />}

      <Divider />

      <FlatList
        scrollEnabled
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getData} />
        }
        refreshing={isLoading}
        extraData={lancamentos}
        data={lancamentos}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => <BoxLancamento {...item} />}
      />
    </Container>
  )
}
