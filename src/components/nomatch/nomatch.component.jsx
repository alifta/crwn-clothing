import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <p>Page Not Found</p>
      <Link to='/'>Go back to home page</Link>
    </div>
  );
};

export default NoMatch;
