import React from 'react';

class ListingShow extends React.Component {

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchListing(this.props.match.params.listingId);
  }

  render () {
    return(
      <div>

      </div>
    );
  }
}

export default ListingShow;
