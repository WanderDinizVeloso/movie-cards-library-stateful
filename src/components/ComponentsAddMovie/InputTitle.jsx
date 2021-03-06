import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ComponentsCriados/Input';

class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <Input
        type="text"
        datatestid="title-input"
        name="title"
        value={ title }
        onChange={ handleChange }
        labelText="Título"
        datatestidLabel="title-input-label"
      />
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;
