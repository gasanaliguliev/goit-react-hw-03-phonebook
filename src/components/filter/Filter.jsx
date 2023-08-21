import React from 'react';
import {FilterContainer, Label, Input} from './Filter.styled'


function Filter({ filter, onFilterChange }) {
  return (
    <FilterContainer>
      <Label>
        Search contacts by name:
        <Input
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </Label>
    </FilterContainer>
  );
}

export default Filter;