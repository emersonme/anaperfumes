import React from 'react'
import {View} from 'react-native'
import {BarChart, XAxis} from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import {Box} from './styles'
import {Text} from 'react-native-svg'

import colors from '../../style/colors'
import {fontes} from '../../config'
import {PinkGradient} from '../Gradients'

const index = ({lucro, total}) => {
  const barData = [
    {
      value: total,
      svg: {
        fill: colors.darkGray,
      },
      label: 'Total (R$)',
    },
    {
      value: lucro,
      svg: {
        fill: colors.primary,
      },
      label: 'Lucro (R$)',
    },
  ]
  const CUT_OFF = total
  const Labels = ({x, y, bandwidth, data}) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={value.value < CUT_OFF ? y(value.value) - 10 : y(value.value) + 15}
        fontSize={14}
        fontFamily={fontes.strong}
        fill={'white'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {value.value}
      </Text>
    ))

  const Legenda = ({x, y, bandwidth, data}) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(0)}
        fontSize={14}
        fontFamily={fontes.primaria}
        fill={'white'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {value.label}
      </Text>
    ))
  return (
    <Box>
      <View>
        <BarChart
          style={{width: 200, height: 200}}
          data={barData}
          contentInset={{left: 20, right: 20, top: 15}}
          spacingInner={0.4}
          yMin={0}
          yAccessor={({item}) => item.value}
          gridMin={0}>
          <Labels />
          <PinkGradient vertical />
        </BarChart>
        <XAxis
          style={{marginTop: 10}}
          data={barData}
          scale={scale.scaleBand}
          formatLabel={(_, i) => barData[i].label}
          svg={{fontFamily: fontes.strong, fontSize: 12, color: colors.white}}
        />
      </View>
    </Box>
  )
}

export default index
