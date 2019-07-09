import React from 'react';

function Icon(props) {
  return <img src={require('./icon/' + props.id + '.svg')} alt="Logo" /> ;
}

export default Icon;