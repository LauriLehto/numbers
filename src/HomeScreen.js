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
    return (
      <View style={toggled ? styles.containerGreen : styles.containerWhite}>
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
            this.props.navigation.navigate("RandomFact");
          }}
        >
          <Text style={toggled ? styles.textWhite : styles.textGreen}>
            Random Text
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("FavNumber");
          }}
        >
          <Text style={toggled ? styles.textWhite : styles.textGreen}>
            Favorite Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            this.props.navigation.navigate('Quiz')
          }}
        >
          <Text style={toggled ? styles.textWhite : styles.textGreen}>
            History Quiz
          </Text>
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
  containerGreen: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#114511"
  },
  containerWhite: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logo: {
    height: 135,
    width: 166,
    marginTop: 30,
    marginBottom: 30
  },
  textWhite: {
    alignSelf: "stretch",
    fontSize: 30,
    color: "#F5FCFF",
    textAlign: "left",
    marginBottom: 20
  },
  textGreen: {
    alignSelf: "stretch",
    fontSize: 30,
    color: "#114511",
    textAlign: "left",
    marginBottom: 20
  }
});

export default HomeScreen;
