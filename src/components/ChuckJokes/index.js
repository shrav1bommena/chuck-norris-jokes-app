/* eslint-disable class-methods-use-this */
import {Component} from 'react'

import './index.css'
import CategoryItem from '../CategoryItem'

class ChuckJokes extends Component {
  state = {categories: [], jokeText: ''}

  componentDidMount() {
    this.getJokesCategories()
  }

  getJokesCategories = async () => {
    const url = 'https://api.chucknorris.io/jokes/categories'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      this.setState({categories: data})
    }
  }

  getJokeText = async categoryName => {
    const url = `https://api.chucknorris.io/jokes/random?category=${categoryName}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.value)
    if (response.ok) {
      this.setState({jokeText: data.value})
    }
  }

  render() {
    const {categories, jokeText} = this.state
    return (
      <div className="main-body">
        <h1 className="main-title">Chuck Norris</h1>
        <ul className="categories-list">
          {categories.map(eachCategory => (
            <CategoryItem
              getJokeText={this.getJokeText}
              jokeText={jokeText}
              categoryName={eachCategory}
              key={eachCategory}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ChuckJokes
