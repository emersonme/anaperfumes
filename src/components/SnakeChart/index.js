import React from 'react'
import {Horizontal, Container} from './styles'
import {AreaChart, LineChart} from 'react-native-svg-charts'
import {
  Text as SvgText,
  Circle,
  Path,
  Rect,
  ClipPath,
  Defs,
  Line,
} from 'react-native-svg'
import {screen, fontes} from '../../config'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import moment from 'moment'
import colors from '../../style/colors'
import {PinkGradient} from '../Gradients'
const data = [560, 780, 1000, 789, 1200, 500]

const contentInset = {top: 20, bottom: 20}
moment().locale('pt-br')
const days = ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const indexToClipFrom = 7

const index = () => {
  const XValues = ({x, y}) =>
    days.map((value, index) => (
      <SvgText
        key={index}
        x={x(index)}
        y={y(-2)}
        fontSize={10}
        fill={colors.white}
        fontFamily={fontes.primaria}
        alignmentBaseline={'text-before-edge'}
        textAnchor={'middle'}>
        {value}
      </SvgText>
    ))

  const Grid = ({x, y}) =>
    data.map((value, index) => (
      <Line
        key={index}
        y1={'80%'}
        y2={y(value)}
        x1={x(index)}
        x2={x(index)}
        stroke={colors.white}
        strokeDasharray={[4, 10]}
        strokeWidth={0.4}
      />
    ))

  const Decorator = ({x, y, data}) => {
    return data.map((value, index) => (
      <SvgText
        key={index * 82}
        x={x(index)}
        y={y(value * 1.05)}
        fontSize={12}
        fill={colors.white}
        fontFamily={fontes.strong}
        alignmentBaseline={'after-edge'}
        // textAnchor={'start'}
      >
        {value}
      </SvgText>
    ))
  }

  const Dot = ({x, y, data}) => {
    return data
      .slice(0, indexToClipFrom + 1)
      .map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={3}
          stroke={colors.dark}
          strokeWidth={1}
          fill={'white'}
        />
      ))
  }

  const DataLine = ({line, color, sWidth = 2}) => (
    <Path
      d={line}
      stroke={colors.primary}
      strokeWidth={sWidth}
      // clipPath={'url(#clip-path-1)'}
      fill={'none'}
    />
  )

  return (
    <Container>
      <Horizontal>
        <AreaChart
          style={{width: screen.width * 1.4}}
          data={data}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 1.5,
            fill: 'url(#PinkGradient)',
            fillOpacity: 0.3,
          }}
          contentInset={contentInset}
          xMin={-0.2}
          xMax={5.5}
          yMax={1200}
          yMin={10}
          gridMin={0}>
          <DataLine />

          <PinkGradient vertical finalValue={'90%'} />
          {/* <Grid /> */}

          <XValues />
          {/* <Dot /> */}
          <Decorator />
        </AreaChart>
      </Horizontal>
    </Container>
  )
}

export default index
