import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchDebounce from '../SearchDebounce';
import Author from '../SearchAuthor';

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
      <div>
        {
          authors.length > 0 ? authors.map(author => <div key={author.id}><Author author={author} t={t} /></div>) : 'Nothing find'
          }
      </div>
    </div>
  );
};

export default Search;
