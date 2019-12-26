/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import {Header, LeftIcon, RightIcon} from './styles'
import {BordelessTouch, Touch} from '../Touchable'
import {Title} from '../Title'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

const index = ({title, onDateChange, date}) => {
  const [isSelecting, setSelecting] = useState(false)

  useEffect(() => {
    setSelecting(false)
  }, [date])

  function openPicker() {
    setSelecting(false)
    setSelecting(true)
  }

  function onChange(event, date) {
    setSelecting(false)
    if (date) {
      onDateChange(date)
    }
  }

  function _inc() {
    if (moment(date).diff(moment(), 'day') < 0) {
      onDateChange(
        moment(date)
          .add(1, 'day')
          .toDate(),
      )
    }
  }

  function _dec() {
    onDateChange(
      moment(date)
        .subtract(1, 'day')
        .toDate(),
    )
  }
  return (
    <Header>
      <BordelessTouch onPress={_dec}>
        <LeftIcon />
      </BordelessTouch>
      <Touch onPress={openPicker}>
        <Title>{moment(date).format('DD/MM/YYYY')}</Title>
      </Touch>
      <BordelessTouch onPress={_inc}>
        <RightIcon />
      </BordelessTouch>
      {isSelecting && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display="calendar"
          onChange={onChange}
        />
      )}
    </Header>
  )
}

export default index
