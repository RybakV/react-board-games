import './Feedback.css';
import { useStoresHook } from '../store/use-stores-hook';

function Feedback() {

    // Background image
    const { pageBackground } = useStoresHook();
    pageBackground.setBackgroundUrl(`/img/bg-home.jpg`);

    return (
        <section className="feedback">
            <div className="container">
                <h1 className="feedback--title">Відгуки</h1>
                <h2 className="feedback--subtitle">Наші вдячні гравці:</h2>
                <div className="feedback--item">
                  <div className="feedback--name">
                    Микола Вересень
                  </div>
                  <p>Грав з друзями в "Пацючу пастку". Навіть не думав, що друзі такі пацюки!</p>
                </div>
              <div className="feedback--item">
                <div className="feedback--name">
                  Петро Гармата
                </div>
                <p>Щиро дякую за таке чудове місце для відпочинку. Будемо заходити до вас ще.</p>
              </div>
              <div className="feedback--item">
                <div className="feedback--name">
                  Леся Джміль
                </div>
                <p>В цьому автентичному місці ще й наливають за архунок закладу. Та тут можна жити! :D</p>
              </div>

            </div>
        </section>
    );
}
export default Feedback;