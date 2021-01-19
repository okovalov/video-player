import React, { useState } from 'react';

interface SearchableProps {
  onFormSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchableProps> = ({
  onFormSubmit,
}: SearchableProps) => {
  const [term, setTerm] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    onFormSubmit(term);
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
    // <div className="search-bar ">
    //   <form onSubmit={onSubmit} className="form">
    //     <div className="field">
    //       <label>Video Search</label>
    //       <input
    //         type="text"
    //         value={term}
    //         onChange={(event) => setTerm(event.target.value)}
    //       />
    //     </div>
    //   </form>
    // </div>
  );
};

export default SearchBar;
