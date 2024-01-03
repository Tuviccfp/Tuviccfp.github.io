import * as React from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../../hooks/getById";
import "./style.css";
import AuthComents from "../Auth";
import { firestore } from "../../../firebase";

const RenderHTMLTiny = ({ content }) => {
  return <div className="render-html-container" dangerouslySetInnerHTML={{ __html: content }} />;
  //Componente para renderizar o conteúdo html lido da API.
};

export default function ArticleID() {
  const [data, setData] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const { id } = useParams();

  const fetchDataById = async () => {
    try {
      const response = await getById(id);
      setData(response);
    } catch (error) {
      setData("Não é possível exibir os dados com base no id.");
    }
  };

  React.useEffect(() => {
    fetchDataById();
    const unsubscribe = firestore
    .collection("comments")
    .where("articleId", "==", id) // Filtra pelos comentários do artigo específico
    .onSnapshot((snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

  return () => unsubscribe();
  }, [id]);

  console.log(data);

  return (
    <section className="section-article-blog">
      <div className="main-blog">
        <article className="show-article-id">
          <img width={200} height={200} src={data.img} alt={data.titulo}/>
          <h4>{data.titulo}</h4>
          <RenderHTMLTiny content={data.post} />
          <span>
            <img width={100} height={100} src="https://avatars.githubusercontent.com/u/91643207?v=4" alt="foto do publicante" />
            <p>{data.author}</p>
          </span>
        </article>
        <article className="show-comments">
          <ul className="list-comments">
            {comments.map((comment) => (
              <li key={comment.id} className="item-comments">
                <p>
                  <img
                    src={comment.userPhotoURL || "https://img.icons8.com/?size=40&id=23477&format=png"} // URL da foto do perfil ou uma imagem padrão
                    alt={`${comment.userName}'s profile`}
                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  />
                  <strong>{comment.userName}:</strong>
                </p>
                {comment.text}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <article>
        <AuthComents />
      </article>
    </section>
  );
}
