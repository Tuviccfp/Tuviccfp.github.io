import './style.css';

export default function Nav({ data, setCurrentComponent }) {
    const handleCurrentComponent = (component) => {
        setCurrentComponent(component);
    }

    return (
        <nav>
            <ul className='list-nav'>
                {data.map((item, index) => (
                    <li onClick={() => handleCurrentComponent(item)} className='item-list-nav' key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    )
}