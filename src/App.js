import React, { Component } from 'react';
class Deck extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        deck: [],
        cardDealt:""
       }    
  this.onShuffle = this.onShuffle.bind(this);
  this.onDeal = this.onDeal.bind(this);
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  for (let suit in suits) {
    for (let value in values) {
      this.state.deck.push(`${values[value]} of ${suits[suit]}`);
      }
}
// const deck1 = new Deck();
// console.log(deck1.deck);
};


  onShuffle = () => {
    const deck = this.state.deck;
    console.log(deck);
    let m = this.state.deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }
  onDeal = () => {
    let cardDealt = this.state.deck.pop();
    this.setState({'cardDealt':cardDealt})
    return cardDealt;
    // this.setState(state => ({ deck: state.deck - 1}))
  }
  render() {
    var greeting = "SEM - Deck of Cards";
    return (
      <div>
        <h1>{greeting}</h1>
        <ul>
        <li>Card Dealt: {this.state.cardDealt}</li>
        </ul>
      <div>
        <button onClick={this.onShuffle} type="button">Shuffle</button>
        <button onClick={this.onDeal} type="button">Deal</button>
      </div>
      </div>
      )
  }
}


export default Deck;