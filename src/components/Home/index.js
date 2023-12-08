import image from './VictorDev.png';
import './style.css';

export default function Home() {
    return (
        <section>
            <article className='article-infos'>
                <img className='img-banner' src={image} alt='Banner victor'/>
                <h4>Victor Cordeiro Fraguas Pires</h4>
                <p>26 anos - RJ</p>
                <span>Desenvolvedor Full Stack</span>
                <ul>
                    {/* Área das tecnologias. */}
                    <li></li>
                </ul>
            </article>
        </section>
    )
}