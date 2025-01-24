import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ReposList: React.FC = function () {
  const [term, setTerm] = useState('');
  const { search_repos } = useActions();
  const state = useTypedSelector((state) => state.repos);
  const { data, error, loading } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    search_repos(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        data.map((name) => <div key={name}>{name}</div>)
      )}
    </div>
  );
};

export default ReposList;
