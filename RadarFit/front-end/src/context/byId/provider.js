import { useState } from 'react';
import PropTypes from 'prop-types';
import byIdContext from './context';

function ByIdProvider({ children }) {
  const [prodById, setPBId] = useState([]);
  const [hasModify, setModify] = useState(false);
  const [id, setId] = useState('');

  return (
    <byIdContext.Provider
      value={ {
        hasModify,
        setModify,
        prodById,
        setPBId,
        id,
        setId,
      } }
    >
      { children }
    </byIdContext.Provider>
  );
}

export default ByIdProvider;

ByIdProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
