import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/foo'>Foo</Link>
      </li>
      <li>
        <Link to='/bar'>Bar</Link>
      </li>
      <li>
        <Link to='/baz'>Baz</Link>
      </li>
    </ul>
  );
}

export function Foo() {
  return (
    <div>
      <h2>This is the foo page</h2>
    </div>
  );
}

export function Bar() {
  return (
    <div>
      <h2>This is the bar page</h2>
    </div>
  );
}

export function Baz() {
  return (
    <div>
      <h2>This is the baz page</h2>
    </div>
  );
}

export function Blah() {
  return (
    <div>
      <h2>This is the blah page</h2>
    </div>
  );
}

export function App() {
  return (
    <div>
      <Nav />
      <h1>Welcome to my App</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
