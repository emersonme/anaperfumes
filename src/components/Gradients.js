import React, {Component} from 'react'
import {LinearGradient, Stop, Defs, Line} from 'react-native-svg'
import colors from '../style/colors'

export const PinkGradient = props => (
  <Defs key={'PinkGradient'}>
    <LinearGradient
      id={'PinkGradient'}
      x1={'0%'}
      y={props.initValue}
      x2={'0%'}
      y2={'100%'}>
      <Stop offset={'0%'} stopColor={'#d81b60'} />
      <Stop offset={'40.5%'} stopColor={'#e91e63'} />
      <Stop offset={'62.5%'} stopColor={'#e91e63'} />
      <Stop offset={'100%'} stopColor={'#ec407a'} />
    </LinearGradient>
  </Defs>
)
