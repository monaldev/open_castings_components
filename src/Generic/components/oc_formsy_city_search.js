import React from 'react';
import { HOC as hoc } from 'formsy-react';

import OCCitySearch from './oc_city_search.js';

const OCFormsyCitySearch = ({
  getValue,
  getErrorMessage,
  setValue,
  ...rest,
}) => (
  <OCCitySearch
    {...rest}
    value={getValue() || undefined}
    errorText={getErrorMessage()}
    onLocationSelected={(selected) => setValue(selected)}
  />
);

OCFormsyCitySearch.propTypes = {
  setValue: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  getErrorMessage: React.PropTypes.func.isRequired,
};

export default hoc(OCFormsyCitySearch);
