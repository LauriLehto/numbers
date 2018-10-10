import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class HomeScreen extends Component {
    static navigationOptions = {
        title: '42'
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RandomFact')}}>
                    <Text>Random Text</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
})

export default HomeScreen