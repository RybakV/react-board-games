import './Sale.css';
import { useStoresHook } from '../store/use-stores-hook';

function Sale() {

    // Background image
    const { pageBackground } = useStoresHook();
    pageBackground.setBackgroundUrl(`/img/bg-home.jpg`);

    return (
        <section className="sale">
            <div className="container">
                <h1 className="sale--title">Акції</h1>
                <h2 className="sale--subtitle">Слідкуйте за знижками</h2>
                <p>• Знижка на кожну третю гру - 50%.</p>
                <p>• На день народження* - 2 гостя безкоштовно.</p>
                <br/>
                <p><em>*Знижка діє протягом 7 днів після дня народження.</em></p>
            </div>
        </section>
    );
}
export default Sale;