import React from 'react';
import { Icon } from '@faststore/ui';
import styles from './customSearchInput.module.scss';

export function CustomSearchInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form className={styles.customSearchInput} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="O que você procura?"
      />
      <button type="submit" aria-label="Search">
        <Icon name="MagnifyingGlass" />
      </button>
    </form>
  );
}
