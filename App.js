import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Header from "./components/Header"
// import Content from "./components/Content"
// import Footer from "./components/Footer"
import Button from './components/Button';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Number: [
        [
          { value: 7, color: "lightgray", h: 25 },
          { value: 4, color: "lightgray", h: 25 },
          { value: 1, color: "lightgray", h: 25 },
          { value: 0, color: "lightgray", h: 25 },
        ],
        [
          { value: 8, color: "lightgray", h: 25 },
          { value: 5, color: "lightgray", h: 25 },
          { value: 2, color: "lightgray", h: 25 },
          { value: '.', color: "lightgray", h: 25 },
        ],
        [
          { value: 9, color: "lightgray", h: 25 },
          { value: 6, color: "lightgray", h: 25 },
          { value: 3, color: "lightgray", h: 25 },
          { value: '=', color: "lightgray", h: 25 }
        ],
      ],
      Operands: [
        { value: 'C', color: "gray", h: 20 },
        { value: '/', color: "gray", h: 20 },
        { value: '*', color: "gray", h: 20 },
        { value: '-', color: "gray", h: 20 },
        { value: '+', color: "gray", h: 20 },
      ],
      Equasion: '',
      Result: 0
    };

    this.submittedData = this.submittedData.bind(this);
  }

  submittedData(x) {
    if (x != '=' && x != 'C') {
      var tmp = this.state.Equasion;
      tmp += x;
      console.log(tmp);
      this.setState({
        Equasion: tmp
      })
    }
    else if (x == '=') {
      var formula = this.state.Equasion;
      var result = eval(formula);
      console.log(result);
      this.setState({
        Result: result
      })
    }
    else if (x == 'C') {
      var tmp = this.state.Equasion;
      tmp = tmp.substring(0, tmp.length - 1);
      this.setState({
        Equasion: tmp,
        Result: 0
      })
    }
  }

  render() {
    var array = [];
    var arr = [];
    var arr2 = [];
    for (var i = 0; i < this.state.Number.length; i++) {
      array.push(<View style={styles.table} key={i + "_k"}>{
        arr = this.state.Number[i].map((x) => {
          return (<Button btClick={this.submittedData} bg={x.color} val={x.value} height={x.h} key={i + "_l" + x.value} />);
        })
      }</View>)
    }
    array.push(<View style={styles.table} key={i + "_m"}>{
      arr2 = this.state.Operands.map((x) => {
        return (<Button btClick={this.submittedData} bg={x.color} val={x.value} height={x.h} key={i + "_n" + x.value} />);
      })
    }</View>)
    return (
      <View style={styles.show}>
        <Text style={styles.eq}>
          {this.state.Equasion}
        </Text >
        <Text style={styles.res}>
          {this.state.Result}
        </Text >
        <View style={styles.container}>
          {array}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
  },
  table: {
    flex: 1,
  },
  show: {
    flex: 1,
    flexDirection: 'column',
  },
  eq: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: '#32ffa9',
    fontSize: 55,
    textAlign: 'right'
  },
  res: {
    flex: 0.3,
    flexDirection: 'column',
    backgroundColor: '#77ffc6',
    fontSize: 40,
    textAlign: 'right'
  }

});