import React from 'react';
import * as transform from 'unix-timestamp-transform' ;

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
    this.contactInfo = this.contactInfo.bind(this);
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

  contactInfo() {
    const { address, agent } = this.props.listing;
    return(

    <div>
      Check out this apartment on: {address.street}, {address.subNeighborhood}. Please contact the agent by texting or calling the following number: {agent.phone},
      or email the agent directly: <a href={`mailto:${agent.email}`} >{agent.email}</a>
    </div>
  );
  }

  render () {
    if(!this.props.listing) {
      return null;
    } else {
      const {agent, videoURL, rentAmount} = this.props.listing;
    return(
      <div>
        <h1>Apartment For Rent</h1>
        <div>
          <ul>
            <li>Realtor: </li>
            <li>{agent.first + " " + agent.last}  </li>
          </ul>
          <ul>
            <li>Posted On:</li>
            <li>{this.getDate()}</li>
          </ul>
        </div>

        <video controls className="ListingShowVideo">
          <source src={videoURL} type="video/mp4" alt="No Video Available"/>
        </video>

        <div>${rentAmount}</div>

      {this.contactInfo()}

      </div>
    );
  }
  }
}

export default ListingShow;
