import './Newbie.css';
import { useStoresHook } from '../store/use-stores-hook';

function Newbie() {

    // Background image
    const { pageBackground } = useStoresHook();
    pageBackground.setBackgroundUrl(`/img/bg-home.jpg`);

    return (
        <section className="newbie">
            <div className="container">
                <h1 className="newbie--title">Новачкам</h1>
                <h2 className="newbie--subtitle">Граєте вперше?</h2>
                <p>Головне - зберігайте спокій і не перекидайте стіл.</p>
            </div>
        </section>
    );
}
export default Newbie;