interface ReposState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: ReposState, action: any): ReposState => {
  switch (action.type) {
    case 'search_repos':
      return { loading: true, error: null, data: [] };

    case 'search_repos_success':
      return { loading: false, error: null, data: action.payload };

    case 'search_repos_error':
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
