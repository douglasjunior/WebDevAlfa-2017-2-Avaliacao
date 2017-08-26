import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Projeto inicial
        </Text>
        <Text style={styles.instructions}>
          da avaliação
        </Text>
        <Text style={styles.instructions}>
          da disciplina de
        </Text>
        <Text style={styles.instructions}>
          Desenvolvimento de Aplicações Híbridas.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WebDevAlfaAvaliacao', () => App);
