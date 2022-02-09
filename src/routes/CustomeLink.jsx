import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? 'text-primary' : ''} to={to} {...props}>
        {children}
      </Link>
      {/* {match && ' (active)'} */}
    </div>
  );
}
