import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [buttonText, buttonTextValue] = useState({ text: 'Get a Joke!' });

  const handleClick = () => {
    getJoke().then(setJoke);
    buttonTextValue((prevState) => prevState === { text: 'Get Punchline!' });
    return (
      <>
        <h2>{joke.setup}</h2>
      </>
    );
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
      <h2>{joke.delivery}</h2>
      <button type="button" onClick={handleClick}>
        {buttonText.text}
      </button>
    </div>
  );
}

export default Home;
