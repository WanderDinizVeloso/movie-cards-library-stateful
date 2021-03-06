import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ComponentsCriados/Input';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <Input
        type="text"
        datatestid="image-input"
        name="imagePath"
        value={ imagePath }
        onChange={ handleChange }
        labelText="Imagem"
        datatestidLabel="image-input-label"
      />
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
