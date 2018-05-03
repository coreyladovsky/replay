import React from 'react';
import * as transform from 'unix-timestamp-transform' ;
import '../css/ListingShow.css';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
    this.contactInfo = this.contactInfo.bind(this);
    this.amenitiesDisplay = this.amenitiesDisplay.bind(this);
  }

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchListing(this.props.match.params.listingId);
  }

  getDate() {
    let time = this.props.listing.timePosted;
    let date = transform.transformUnixTime(time).toDateString();
    return date;
  }

  amenitiesDisplay() {
    const {amenities} = this.props.listing;
    let amens = amenities.map( amen => {
      return <li>{amen}</li>;
    });

    return(
      <div>
        <div className="ListingShowListInfo">Amenities: </div>
        <ul>
          {amens}
        </ul>
      </div>
    );
  }

  contactInfo() {
    const { address, agent } = this.props.listing;
    return(

    <div className="ListingShowContact">
      Check out this apartment on: {address.street}, {address.subNeighborhood}. Please contact the agent by texting or calling the following number: {agent.phone},
      or email the agent directly: <a href={`mailto:${agent.email}`} >{agent.email}</a>
    </div>
  );
  }

  render () {
    if(!this.props.listing) {
      return null;
    } else {
      const {agent, videoURL, rentAmount, bedroom, bathroom} = this.props.listing;
    return(
      <div className="ListingShowContainer">
        <h1>Apartment For Rent</h1>
        <div className="ListingShowHeadInfo">
          <ul>
            <li>Realtor: </li>
            <li>{agent.first + " " + agent.last}  </li>
          </ul>
          <ul>
            <li>Posted On:</li>
            <li>{this.getDate()}</li>
          </ul>
        </div>

        <div className="ListingShowVideoContainer">
        <video controls className="ListingShowVideo">
          <source src={videoURL} type="video/mp4" alt="No Video Available"/>
        </video>
      </div>
        <div className="ListingShowRent">Rent: ${rentAmount}</div>
        <div  className="ListingShowListInfoContainer">
        <div>
        <div className="ListingShowListInfo">Layout: </div>
        <ul>
          <li>Bedrooms: {bedroom}</li>
          <li>Bathrooms: {bathroom}</li>
        </ul>
      </div>
      {this.amenitiesDisplay()}
      </div>
      {this.contactInfo()}

      </div>
    );
  }
  }
}

export default ListingShow;
