import React from 'react';
import "../css/ListingItem.css";

class ListingItem extends React.Component {
  constructor(props) {
    super(props);
    this.niceAddress = this.niceAddress.bind(this);
    this.listing = this.props.listing;
  }

  niceAddress() {
    let street = this.listing.address.street;
    let district = this.listing.address.subNeighborhood;
    return(
      <ul className="ListingItemAddress">
        <li>
          {street}
        </li>
        <li>
          {district}
        </li>
      </ul>
    );
  }


  render () {
    return(
      <div className="ListingItem">
        {this.niceAddress()}

      </div>
    );
  }
}

export default ListingItem;
