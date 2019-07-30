import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'gatsby';
import SearchDebounce from '../SearchDebounce';

const Search = () => {
  const { t } = useTranslation();
  const basicAuthors = t('authors', { returnObjects: true });
  const [authors, setAuthors] = useState(basicAuthors);
  const handleChange = (text) => {
    const searchText = text.toLowerCase();
    setAuthors(
      basicAuthors.filter(author => author.name.toLowerCase().includes(searchText) || author['birth-date'].toLowerCase().includes(searchText)),
    );
  };

  return (
    <div>
      <SearchDebounce handleChange={(...args) => handleChange(...args)} t={t} />
      <div>{authors.map(author => author.name)}</div>
    </div>
  );
};

export default Search;
