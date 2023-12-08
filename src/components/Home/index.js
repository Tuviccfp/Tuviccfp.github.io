import AnimationBanner from '../AnimationBanner';
import './style.css';
import {FileJs, FileSql, Database, Atom} from '@phosphor-icons/react'

export default function Home() {
    return (
        <section>
            <article className='article-infos'>
                <AnimationBanner />
                <h4>Victor Cordeiro Fraguas Pires</h4>
                <p>26 anos - RJ</p>
                <span>Desenvolvedor Full Stack</span>
                <ul className='list-tec'>
                    {/* Área das tecnologias. */}
                    <li className='item-list-tec' data-tooltip='JavaScript e seus ambientes.'>
                        <FileJs className='icon-tec'/>
                    </li>

                    <li className='item-list-tec' data-tooltip='React & React Native'>
                        <Atom  className='icon-tec'/>
                    </li>

                    <li className='item-list-tec' data-tooltip='MySQL'>
                        <FileSql  className='icon-tec'/>
                    </li>

                    <li className='item-list-tec' data-tooltip='MongoDB'>
                        <Database className='icon-tec'/>
                    </li>
                
                </ul>
            </article>
        </section>
    )
}