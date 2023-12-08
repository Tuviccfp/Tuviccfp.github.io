import './style.css';
export default function AnimationBanner() {
    return (
        <div className="banner-background" id='text-blink' data-tooltip='/_'>
            <div className="layout-chaves">
                <span>{'{'}</span>
                <span>{'}'}</span>
            </div>
            <p className='name'>VictorDev</p>
        </div>
    )
}