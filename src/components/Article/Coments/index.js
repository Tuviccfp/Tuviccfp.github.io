import * as React from "react";
import { auth, firestore } from "../../../firebase";
import './style.css'
import {WarningCircle} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Coments() {
  const [newComment, setNewComment] = React.useState("");
  const navigate = useNavigate();
  
  // Função responsável por adicionar um novo comentário na coleção do firebase.
  const addComment = async () => {
    if (newComment.trim() !== "") {
      if (auth.currentUser) {
        const { displayName, photoURL } = auth.currentUser;
  
        const articleId = localStorage.getItem("currentArticleId");

        await firestore.collection("comments").add({
          text: newComment,
          userId: auth.currentUser.uid,
          userName: displayName || "Anonymous",
          userPhotoURL: photoURL || "",
          articleId: articleId
        });

        setNewComment("");
        navigate(-1)
      } else {
        console.log("Usuário não autenticado. Não é possível adicionar comentário.");
      }
    }
  };
  return (
    <section>
      <article className="section-comments">
        <label>
          <span data-tooltip='Os comentários são monitorados, evite um comportamento hóstil e agressivo nos seus comentários.' className="icon-warning"><WarningCircle width={30} height={30} /></span>Comentar Publicação:
        </label>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required={true}
            placeholder="Digite seu comentário aqui"
          />
        <button className="btn-send-comments" onClick={addComment}>Enviar</button>
      </article>
    </section>
  );
}
