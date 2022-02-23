import { Component } from 'react'
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffee: [],
      searchBar: ''
    }
  }


  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => this.setState({ coffee: data }))

  }

  handleChange = (e) => {
    this.setState({ searchBar: e.target.value })
  }

  render() {
    const { coffee, searchBar } = this.state;
    const filteredCoffees = coffee.filter(coffees => coffees.title.toLowerCase().includes(searchBar.toLowerCase()))

    return (
      <div>
        <SearchBar placeholder='Type a coffee' handleChange={this.handleChange} />
        <CardList data={filteredCoffees}>Hello there</CardList>
      </div>
    )
  }
}




export default App
