import React, { useState } from 'react';
import { uniqueId } from 'lodash';

export const CheckboxInput = ({
  label,
  name,
  value = null,
  disabled,
  onChange,
}) => {
  // id will be set once when the component initially renders, but never again
  // we generate an unique id prefixed by the field name
  const [id] = useState(uniqueId(name));

  return (
    <div className="form__group">
      <input
        onChange={onChange}
        disabled={disabled ? 'disabled' : false}
        checked={value}
        type="checkbox"
        name={name}
        id={id}
      />
      <label htmlFor={id} className="label-inline">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
