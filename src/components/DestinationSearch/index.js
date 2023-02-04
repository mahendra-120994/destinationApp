// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props // props are accessed in render()

    const {searchInput} = this.state

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-box">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              className="input"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              className="search-icon"
              alt="search icon"
            />
          </div>
          <div>
            <ul className="ul-list">
              {searchResult.map(eachItem => (
                <DestinationItem
                  destinationsDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
