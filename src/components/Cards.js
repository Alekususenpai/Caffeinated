import React, { Component } from 'react'

export class Cards extends Component {
          constructor() {
                    super();

                    this.state = {
                              characters: []
                    };
          }

          componentDidMount() {
                    fetch('https://jsonplaceholder.typicode.com/users')
                              .then(response => response.json())
                              .then(characters => this.setState({ characters }))
          }
          render() {
                    return (
                              <div>
                                        {this.state.characters.map(character => (
                                                  <div className="card">
                                                            <h2 key={character.id}>{character.username}</h2>
                                                            <h3>Name: {character.name}</h3>
                                                            <h3>Email: {character.email}</h3>
                                                            <h3>Company name: {character.company.name}</h3>
                                                            <h3>Catch phrase: {character.company.catchPhrase}</h3>
                                                  </div>
                                        ))}
                              </div>
                    )
          }
}

export default Cards
