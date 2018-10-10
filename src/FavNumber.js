import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { AsyncStorage } from "react-native";

export default class Favnumber extends Component {
  static navigationOptions = {
    title: "Favorite Number"
  };

  constructor(props) {
    super(props);

    this.state = {
      trivia: ""
    };

    this.inputText = "";
  }

  componentDidMount() {
    this.getData();
  }

  getTrivia = async number => {
    const response = await fetch(
      `http://numbersapi.com/${number}/trivia?fragment`
    );
    const data = await response._bodyText;
    this.setState({ trivia: data });
  };

  getData = async () => {
    console.warn("get");

    try {
      this.inputText = await AsyncStorage.getItem("favNumber");
      this.getTrivia(this.inputText);
    } catch (error) {
      // error
      console.warn("err", error);
    }
  };

  storeData = async () => {
    console.warn("store", this.inputText);
    try {
      await AsyncStorage.setItem("favNumber", this.inputText);
    } catch (error) {
      // Error saving data
    }
  };

  onChangeInput = number => {
    this.inputText = number;
  };

  onPress = () => {
    const number = this.inputText;
    if (!number || isNaN(number)) return;
    this.getTrivia(number);
    this.storeData();
    this.setState({ favNumber: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.favnum}>
          {this.inputText ? (
            <Text>Your favorite number is {this.inputText}</Text>
          ) : (
            <Text>Set your favorite number</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={this.onChangeInput}
            placeholder={"Enter a number"}
            style={styles.input}
          />
          <Button
            onPress={this.onPress}
            title={this.inputText ? "Update Number" : "Save Number"}
          />
        </View>

        {this.state.trivia ? (
          <View style={styles.info}>
            <Text style={styles.number}>{this.inputText}</Text>
            <Text style={styles.text} numberOfLines={5}>
              {this.state.trivia}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    alignSelf: "center",
    backgroundColor: "#F5FCFF"
  },
  number: {
    fontSize: 30,
    color: "#F5FCFF",
    alignSelf: "center"
  },
  info: {
    width: 300,
    height: 300,
    backgroundColor: "#114511",
    borderRadius: 10,
    padding: 10
  },
  input: {
    backgroundColor: "white"
  },
  text: {
    color: "#F5FCFF"
  }
});
