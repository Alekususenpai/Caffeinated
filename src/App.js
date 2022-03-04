import { Component } from 'react'
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';
import Particle from './components/Particle/Particle';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffee: [],
      searchBar: ''
    }
  }


  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot').then((response) => {
      if (response.ok) {
        return response.json();
      } console.log('Something went wrong')
    }).then((data) => { this.setState({ coffee: data }) }).catch((error) => {
      console.log('BREAK YOURSELF. GIVE ME YOUR GODAMN NUMBER')
    });
  }

  handleChange = (e) => {
    this.setState({ searchBar: e.target.value })
  }

  render() {
    const { coffee, searchBar } = this.state;
    const filteredCoffees = coffee.filter(coffees => coffees.title.toLowerCase().includes(searchBar.toLowerCase()))
    return (
      <div className="background">
        <Particle />
        <div className="banner">
          <h2>I don't need an inspirational quote.
            <br /> I need coffee.
          </h2>
          <SearchBar placeholder='Type one' handleChange={this.handleChange} />
        </div>
        <CardList data={filteredCoffees}></CardList>
      </div>


    )
  }
}




export default App
