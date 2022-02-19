import { Component } from 'react'
import './App.css';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffee: []
    }
  }

  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => this.setState({coffee: data}))

  }
  render() {
    return (
      <CardList data={this.state.coffee}>Hello there</CardList>
    )
  }
}




export default App
