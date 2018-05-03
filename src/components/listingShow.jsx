import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ListingShow.css';
import { baseUrl } from '../index.js';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
    this.contactInfo = this.contactInfo.bind(this);
    this.amenitiesDisplay = this.amenitiesDisplay.bind(this);
  }

  componentDidMount() {
      window.scrollTo(0, 0);
      this.props.clearFilter();
      this.props.fetchListing(this.props.match.params.listingId);
  }

  getDate() {
    let a = new Date(this.props.listing.timePosted * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = month + ' ' + date + ', '  + year ;
    return time;
  }

  amenitiesDisplay() {
    const {amenities} = this.props.listing;
    let amens = amenities.map( (amen, i) => {
      return <li key={i}>{amen}</li>;
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
      const {agent, videoURL, rentAmount, bedroom, bathroom, authorKey} = this.props.listing;
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

      <div className="ListingShowUserLink">
        <Link to={baseUrl + "/UserListings/" + authorKey}> More listings by this User </Link>
      </div>
      </div>
    );
  }
  }
}

export default ListingShow;
