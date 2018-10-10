/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Favnumber from "./Favnumber";

class Question extends Component {
  render() {
    let { text } = this.props.data;
    return <Text style={this.props.style}>{text}</Text>;
  }
}

export default class App extends Component {
  state = {
    data: {},
    date: 9,
    month: 10,
    favNumber: true
  };

  resToState() {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    // const year = date.getUTCYear()
    let url;

    url = `http://numbersapi.com/${month}/${day}/date?json`;

    if (url) {
      fetch(url)
        .then(response => response.json())
        .catch(err => console.warn("fetch error" + err))
        .then(json => {
          this.setState({ data: json });
        })
        .catch(err => console.warn("json not loaded" + err));
    }
  }

  componentDidMount() {
    this.resToState();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.favNumber ? (
          <Favnumber />
        ) : this.state.data ? (
          <Question style={styles.welcome} data={this.state.data} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
