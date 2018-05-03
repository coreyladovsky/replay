import React from "react";
import ListingItem from "./listingItem";

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filterLength: 0};
  }

  componentDidMount() {
    this.props.fetchListings();
  }


  render() {
    let listings = this.props.listings.map((listing, idx) => {
      return <ListingItem key={listing.address.addressID + idx} listing={listing} />;
    });
    return <ul>{listings}</ul>;
  }
}

export default Listings;
