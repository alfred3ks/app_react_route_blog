import { NavLink } from "react-router-dom";
import posts from "../data/post";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/app_react_route_blog/post/${post.id}`}>
                {post.titulo}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
