import React from 'react';
import PropTypes from 'prop-types';
import Input from './ComponentsCriados/Input';
import Select from './ComponentsCriados/Select';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    const optionsArray = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];

    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          datatestid="text-input"
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
          labelText="Inclui o texto"
          datatestidLabel="text-input-label"
        />
        <Input
          type="checkbox"
          datatestid="checkbox-input"
          value={ bookmarkedOnly }
          name="bookmarkedOnly"
          onChange={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
          datatestidLabel="checkbox-input-label"
        />
        <Select
          datatestid="select-input"
          value={ selectedGenre }
          name="selectedGenre"
          onChange={ onSelectedGenreChange }
          labelText="Filtrar por gênero"
          datatestidLabel="select-input-label"
          options={ optionsArray }
          datatestidOption="select-option"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}.isRequired;

export default SearchBar;
