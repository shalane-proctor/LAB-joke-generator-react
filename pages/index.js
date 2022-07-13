import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [buttonText, buttonTextValue] = useState('Get a joke!');

  const currentButtonText = (text) => { buttonTextValue(text); };
  const handleClick = () => {
    getJoke().then((text) => {
      setJoke({
        setup: text.setup,
        delivery: text.delivery,
      });
      currentButtonText('Get punchline!');
    });
  };

  // States Get a Joke (button only), render joke and update button to "Get punchline", show punchline"

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <>
        <h2>{joke.setup}</h2>
        <h5>{buttonText === 'Get punchline!' ? joke.delivery : undefined}</h5>
        <div>
          {buttonText === 'Get a joke!' || buttonText === 'Get a new joke?' ? (
            <button type="button" onClick={handleClick}>
              {buttonText}
            </button>
          ) : (
            <button type="button" onClick={() => currentButtonText('Get a new joke?')}>
              {buttonText}
            </button>
          )}
        </div>
      </>
    </div>
  );
}

export default Home;
