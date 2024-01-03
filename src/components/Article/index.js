import * as React from 'react'
import { getAll } from '../../hooks/getAll';
import './style.css';
import { Link } from 'react-router-dom';

export default function Articles() {
    const [articles, setArticles] = React.useState([]);

    const fetchAllData = async () => {
        try {
            const dataAll = await getAll();
            setArticles(dataAll)
        } catch (error) {
            setArticles('Erro ao acessar os dados.')
        }
    }

    React.useEffect(() => {
        fetchAllData();
    }, [])
    
    return (
        <>
            <section className='section-blog'>
                <h4>Meus artigos</h4>
                {articles.map((item, index) => (
                    <Link to={`/article/${item._id}`} key={index} className='show-articles'>
                        <article>
                            <img width={300} height={200} src={item.img} alt={item.titulo}/>
                            <h5>{item.titulo}</h5>
                            <p style={{textDecoration: 'none'}}>{item.short_description}</p>
                            <p style={{textDecoration: 'none', color: 'grey'}}>Clique no card para acessar.</p>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    )
}