import React from 'react';
import GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.LIBRARIES = ['places'];
GoogleMapsLoader.KEY = 'AIzaSyAnMcYCuXg_JH2vP7AE09wIGCqyfoKYGJs';

import Typeahead from 'react-bootstrap-typeahead';

class OCCitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      input: props.value || '',
      google: undefined,
    };
  }
  componentDidMount() {
    GoogleMapsLoader.load((google) => {
      this.setState({ google });
    });
  }
  onSelected(selected) {
    this.props.onLocationSelected(selected);
  }
  updateInput(input) {
    this.setState({ input }, this.filterDropDown.bind(this));
  }
  filterDropDown() {
    const input = this.state.input;
    const { google } = this.state;
    const filtered = [];
    if (google && input) {
      const service = new google.maps.places.AutocompleteService(
        document.getElementById('autocomplete')
      );
      const request = {
        input,
        types: ['(cities)'],
      };
      service.getPlacePredictions(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            filtered.push({
              text: `${results[i].terms[0].value}, ${results[i].terms[1].value}`,
              value: results[i],
            });
          }
          this.setState({ dataSource: filtered });
        }
      });
    } else if (!input) {
      this.setState({ dataSource: [] });
    }
  }
  // <AutoComplete
  //   {...this.props}
  //   id="autocomplete"
  //   onUpdateInput={this.updateInput.bind(this)}
  //   floatingLabelText="Enter a city, state"
  //   floatingLabelFixed
  //   fullWidth
  //   searchText={this.state.input}
  //   dataSource={this.state.dataSource}
  //   filter={AutoComplete.noFilter}
  //   onNewRequest={this.onSelected.bind(this)}
  //   menuStyle={{ maxHeight: '200px' }}
  //   openOnFocus
  // />
  render() {
    return (
      <Typeahead
        onChange={this.onSelected.bind(this)}
        onInputChange={this.updateInput.bind(this)}
        options={this.state.dataSource}
        labelKey="text"
      />
    );
  }
}

OCCitySearch.propTypes = {
  onLocationSelected: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};

export default OCCitySearch;
