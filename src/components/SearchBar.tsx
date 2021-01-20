import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchVideos } = useActions();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    searchVideos(term);
  };

  return (
    <form onSubmit={onSubmit} className="form search-form">
      <article className="panel is-primary">
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-primary"
              type="text"
              placeholder="Search"
              onChange={(event) => setTerm(event.target.value)}
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </article>
    </form>
  );
};

export default SearchBar;
