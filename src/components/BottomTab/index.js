import React from 'react'
import {Row, Option, OptionIcon, Caption} from './styles'
import screens from './data'
import colors from '../../style/colors'

const index = ({navigation}) => {
  const {index} = navigation.state

  return (
    <Row>
      {screens.map((route, routeIndex) => {
        const isRouteActive = routeIndex === index

        return (
          <Option
            key={routeIndex}
            onPress={() => navigation.navigate(route.name)}>
            <OptionIcon
              name={route.iconName}
              type={route.iconType}
              color={isRouteActive ? colors.primary : undefined}
            />
            <Caption color={isRouteActive ? colors.primary : undefined}>
              {route.caption}
            </Caption>
          </Option>
        )
      })}
    </Row>
  )
}

export default index
