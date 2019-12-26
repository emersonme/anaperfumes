import {Plaform, Dimensions, Platform} from 'react-native'

export const screen = Dimensions.get('screen')

export const isIos = Platform.OS === 'ios'

export const fontes = {
  strong: 'OpenSans-SemiBold',
  primaria: 'OpenSans-Regular',
}
