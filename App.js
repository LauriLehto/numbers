/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default class App extends Component {
  state= {
    data:[],
    date:9,
    month:10,
    done: false
  }

  resToState() {
    
    const url = `http://numbersapi.com/random/year?json`
    let i = 3

    let intFetch = setInterval(()=>{
      if(url){
        fetch(url)
        .then(response => response.json())
        .catch(err => console.warn('fetch error'+ err))
        .then(json => {
          this.setState(prev=>{
          const data = prev.data.concat(json)
          return { data: data, date: this.state.date, month: this.state.month, done:false }
        })})
        .catch(err => console.warn('json not loaded'+err))
      }
      i--
      if(!i){
        this.setState({ done: true })
        clearInterval(intFetch)
      }
    },1000)
    
  }

  componentDidMount() {
    this.resToState()
  }

  renderQuestions() {
    return this.props.data.map(obj => {
       return <Text style={this.props.style}>Keys</Text>
     }) 
   }

  render() {
    return (
      <FlatList 
        style={styles.container}
        keyExtractor={}
      >
      <Text>Tekstiä</Text>
          { this.state.done ? {renderQuestions} : <ActivityIndicator />}
      </FlatList>
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
  welcome: {
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
