import React from "react";
import ListingItem from "./listingItem";

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.checkFilter = this.checkFilter.bind(this);
    this.makeList = this.makeList.bind(this);
    this.state = {filterLength: 0};
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.filters.length !== nextProps.filters.length) {
      this.setState({filterLength: nextProps.filters.length});
    }
  }

  makeList() {
    // let listings;
    // if (this.state.filterLength !== 0) {
    //   listings = [];
    //   this.props.listings.forEach(listing => {
    //     if (this.checkFilter(listing)) {
    //       listings.push(listing);
    //     }
    //   });
    // } else {
      let listings = this.props.listings;
      debugger
    // }

    return listings.map(listing => {
      return <ListingItem key={listing.addressID} listing={listing} />;
    });
  }

  checkFilter(listing) {
    if(!listing.amenities) {
      return false;
    }

    for (let i = 0; i < this.props.filters.length; i++) {
      if(!listing.amenities.includes(this.props.filters[i]) ){
        return false;
      }
    }
    return true;
  }

  render() {
    return <ul>{this.makeList()}</ul>;
  }
}

export default Listings;
