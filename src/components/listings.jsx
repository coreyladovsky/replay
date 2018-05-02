import React from 'react'

class Listings extends React.Component {
  componentDidMount() {
      this.props.fetchListings();
  }

  render () {
    return null;
  }
}

export default Listings;
