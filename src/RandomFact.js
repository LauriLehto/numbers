
import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

class RandomFact extends Component {
    state= {
        data:{},
        date:9,
        month:10
      }
    
      resToState() {
        const date = new Date()
        const day = date.getUTCDate()
        const month = date.getUTCMonth()+1
        let url
    
        url = `http://numbersapi.com/${month}/${day}/date?json`
        
        if(url){
          fetch(url)
          .then(response => response.json())
          .catch(err => console.warn('fetch error'+ err))
          .then(json => {this.setState({data:json})})
          .catch(err => console.warn('json not loaded'+err))
          }
      }
     

  componentDidMount() {
    this.resToState()
  }
  
    render() {
        return (
            <View>
        { this.state.data ?
            <Text style={styles.random}>{this.state.data.text}</Text>
            : <ActivityIndicator />}
        </View>

        )
        
        
    }
}

const styles = StyleSheet.create({
random: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
});
  
export default RandomFact

