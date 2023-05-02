import posts from "../data/post";
import { useParams, Navigate } from "react-router-dom";

const Post = () => {
  // Obtenemos el parametro id de la ruta:
  const parametros = useParams();
  console.log(parametros);
  // Hacemos destructuring para obtener el valor id del objeto:
  const { id } = useParams();
  console.log(id);

  return (
    <>
      {posts[id - 1] ? (
        <>
          <h1>{posts[id - 1].titulo}</h1>
          <p>{posts[id - 1].texto}</p>
        </>
      ) : (
        <Navigate replace to={"/"} />
      )}
    </>
  );
};

export default Post;
