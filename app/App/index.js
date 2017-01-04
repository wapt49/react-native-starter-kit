'use strict';

import React, {Component} from 'react';

import Welcome from './components/Welcome';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Application extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Welcome />

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
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

AppRegistry.registerComponent('StarterKit', () => Application);