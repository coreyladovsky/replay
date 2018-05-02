import React from 'react';
import ListingItem from './listingItem';

class Listings extends React.Component {
  componentDidMount() {
      this.props.fetchListings();
  }

  render () {
    const listings = this.props.listings.map(listing => {
      return <ListingItem key={listing.addressID} listing={listing}/>;
    });

    return(
      <ul>
        {listings}
      </ul>
    );
  }
}

export default Listings;
