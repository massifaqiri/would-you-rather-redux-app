import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/SignInputBox.css';

/**
 * Functional component representing the input boxes for sign up and sign in pages.
 * @param Refer to PropTypes below.
 */
function SignInputBox(props) {
  const { label, inputName, onChange, value } = props;
  return (
    <div>
      <div className='label'>{label}</div>
      {label === 'Password:' || label === 'Repeat Password:' ? (
        <input
          type='password'
          value={value}
          onChange={e => onChange(inputName, e.target.value)}
        ></input>
      ) : (
        <input
          type='text'
          value={value}
          onChange={e => onChange(inputName, e.target.value)}
        ></input>
      )}
    </div>
  );
}

SignInputBox.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SignInputBox;
