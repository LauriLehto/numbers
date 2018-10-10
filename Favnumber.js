import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default class Favnumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      trivia: ""
    };
  }

  onChangeInput = input => {
    this.setState({ input });
  };

  onPress = () => {
    if (!this.state.input) return;
    let number = this.state.input;
    this.getTrivia(number);
  };

  async getTrivia(number) {
    const response = await fetch(
      `http://numbersapi.com/${number}/trivia?fragment`
    );
    const data = await response._bodyText;
    this.setState({ trivia: data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What's your favourite number?</Text>
        <TextInput
          onChangeText={this.onChangeInput}
          placeholder={"Enter number here"}
          value={this.state.input}
        />
        <Button onPress={this.onPress} title="BOOM" />

        {this.state.trivia ? (
          <View>
            <Text>{this.state.input}</Text>
            <Text>{this.state.trivia}</Text>
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
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
