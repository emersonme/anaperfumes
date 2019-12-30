import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'React Native Demo',
      host: '192.168.25.7',
    })
    .useReactNative({
      asyncStorage: true,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: true,
      errors: {veto: stackFrame => false},
      overlay: false,
    })
    .connect()

  tron.clear()

  console.tron = tron
}
