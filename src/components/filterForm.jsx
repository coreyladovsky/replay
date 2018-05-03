import React from "react";
import "../css/filterForm.css";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noFee: false,
      convertible: false,
      gym: false,
      petFriendly: false,
      laundry: false,
      doorman: false,
      dishwasher: false,
      elevator: false,
      roofDeck: false
    };
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(e) {
    let stateObj = () => {
      let result = {};
      result[e.target.value] = e.target.checked;
      return result;
    };
    let sol = stateObj();
    this.setState(sol);
    this.props.frontFilter(sol);
  }

  render() {
    return (
      <div>
        <ul className="filterFormUl" onChange={this.updateFilter}>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="noFee"
            />
            <label className="filterFormLabel">No Fee</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="convertible"
            />
            <label className="filterFormLabel">Convertible</label>
          </li>
          <li className="filterFormListItem">
            <input className="filterFormCheckbox" type="checkbox" value="gym" />
            <label className="filterFormLabel">Gym</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="petFriendly"
            />
            <label className="filterFormLabel">Pet Friendly</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="laundry"
            />
            <label className="filterFormLabel">Laundry</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="doorman"
            />
            <label className="filterFormLabel">Doorman</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="dishwasher"
            />
            <label className="filterFormLabel">Dishwasher</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="elevator"
            />
            <label className="filterFormLabel">Elevator</label>
          </li>
          <li className="filterFormListItem">
            <input
              className="filterFormCheckbox"
              type="checkbox"
              value="roofDeck"
            />
            <label className="filterFormLabel">Roof Deck</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterForm;
