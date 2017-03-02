import React from 'react';

const withMinLengthValidation = (Component, minLength) => {
  const warning = <span>Minimum {minLength} required.</span>;
  return (props) => {
    return <div><Component {...props} />{ props.value.length < minLength ? warning : ''}</div>
  }
}

export default withMinLengthValidation