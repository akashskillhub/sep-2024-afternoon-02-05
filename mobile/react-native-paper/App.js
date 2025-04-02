import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Learn_Indicators from './screens/01_spinner/Learn_Indicators'
import Learn_Avatar from './screens/02_avatar/Learn_Avatar'
import Learn_Buttons from './screens/03_buttons/Learn_Buttons'
import Learn_chip from './screens/04_chips/Learn_chip'
import Learn_modal from './screens/05_modal/Learn_modal'
import Learn_input from './screens/06_input/Learn_input'
import Learn_progress from './screens/07_Progress/Learn_progress'
import Learn_Snackbar from './08_snackbar/Learn_Snackbar'

const App = () => {
  return <PaperProvider>
    <View style={{ margin: 20, flex: 1 }}>
      {/* <Learn_Indicators /> */}
      {/* <Learn_Avatar /> */}
      {/* <Learn_Buttons /> */}
      {/* <Learn_chip /> */}
      {/* <Learn_modal /> */}
      {/* <Learn_input /> */}
      {/* <Learn_progress /> */}
      <Learn_Snackbar />
    </View>
  </PaperProvider>
}

export default App

const styles = StyleSheet.create({})