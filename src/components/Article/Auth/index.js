import * as React from 'react';
import firebase from 'firebase/compat/app'
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom'
import './style.css'
import {useParams} from 'react-router-dom';

export default function AuthComents() {
    const { id } = useParams();
    const navigate = useNavigate();

    const redirectToComments = () => {
        // Ele armazena o id do artigo que a pessoa selecionou para comentar.
        localStorage.setItem("currentArticleId", id);
        navigate('/comments');
      };

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(() => {
            redirectToComments();
        });
    }

    return (
        <div>
            <p>Para comentar no artigo, é preciso logar</p>
            <button className='button-sign-google' onClick={signInWithGoogle}>
                <p>Continuar com o google</p>
                <img src='https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png' width={25} height={25} alt=''/>
            </button>
        </div>
    )
}