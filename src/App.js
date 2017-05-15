import React, { Component } from "react"
import { AppRegistry, View, Text, WebView, StyleSheet } from "react-native"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "http://www.iusinaction.com" }}
          style={styles.web}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "blue",
  },
  web: {},
})

AppRegistry.registerComponent("Iusinaction", () => App)
