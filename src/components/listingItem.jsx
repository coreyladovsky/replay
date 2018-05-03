import React from "react";
import { Link } from "react-router-dom";
import "../css/ListingItem.css";
import { baseUrl } from "../index.js";

class ListingItem extends React.Component {
  constructor(props) {
    super(props);
    this.listing = this.props.listing;
    this.niceAddress = this.niceAddress.bind(this);
    this.videoPlay = this.videoPlay.bind(this);
    this.listingLayout = this.listingLayout.bind(this);
    this.goToShowPage = this.goToShowPage.bind(this);
  }

  niceAddress() {
    let street = this.listing.address.street;
    let district = this.listing.address.subNeighborhood;
    return (
      <ul className="ListingItemAddress">
        <li>{street}</li>
        <li>{district}</li>
      </ul>
    );
  }

  videoPlay() {
    return (
      <div className="ListingItemVideoContainer">
        <video controls className="ListingItemVideo">
          <source
            src={this.listing.videoURL}
            type="video/mp4"
            alt="No Video Available"
          />
        </video>
      </div>
    );
  }

  listingLayout() {
    return (
      <ul className="ListingItemLayout">
        <li>Bedrooms: {this.listing.bedroom}</li>
        <li>Bathrooms: {this.listing.bathroom}</li>
      </ul>
    );
  }

  goToShowPage() {
    return (
      <div className="ListingItemLinkContainer">
        <Link
          className="ListingItemLink"
          to={baseUrl + `/Listings/${this.listing.listingKey}`}
        >
          Click here to learn more about this listing!
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="ListingItem">
        {this.niceAddress()}
        <div className="ListingItemRentAmount">${this.listing.rentAmount}</div>
        {this.videoPlay()}

        {this.listingLayout()}

        {this.goToShowPage()}
      </div>
    );
  }
}

export default ListingItem;
