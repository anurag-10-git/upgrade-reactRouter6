import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
  <section>
    <h1>The Welcome Page</h1>
    <Link to={'new-user'}>
      new-user page
    </Link>
    <Outlet/>
  </section>
  );
};

export default Welcome;