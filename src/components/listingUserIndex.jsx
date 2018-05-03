import React from 'react';
import ListingItem from './listingItem';

class UserListingIndex extends React.Component {
  componentDidMount() {
      this.props.fetchListings();
  }

  render () {
    const listings = this.props.userListings.map(listing => {
      return <ListingItem key={listing.addressID} listing={listing}/>;
    });
    return(
      <ul>
        {listings}
      </ul>
    );
  }
}

export default UserListingIndex;
