import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class HomeScreen extends Component {
  state = { toggled: false };

  static navigationOptions = {
    headerStyle: { display: "none" }
  };

  render() {
    const { toggled } = this.state;
    const themetext = {
      color: toggled ? "#F5FCFF" : "#114511"
    };
    const themebg = {
      backgroundColor: toggled ? "#114511" : "#F5FCFF"
    };

    return (
      <View style={[styles.container, themebg]}>
        <Image
          source={
            toggled
              ? require("../assets/nmbrs-logo-white.png")
              : require("../assets/nmbrs-logo.png")
          }
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("RandomFact", {
              toggled: this.state.toggled
            });
          }}
        >
          <Text style={[styles.text, themetext]}>Random Text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("FavNumber", {
              toggled: this.state.toggled
            });
          }}
        >
          <Text style={[styles.text, themetext]}>Favorite Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Quiz", {
              toggled: this.state.toggled
            });
          }}
        >
          <Text style={[styles.text, themetext]}>History Quiz</Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#114511", true: "#F5FCFF" }}
          onValueChange={value => this.setState({ toggled: value })}
          value={this.state.toggled}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: 135,
    width: 166,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    alignSelf: "stretch",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 20
  }
});

export default HomeScreen;
