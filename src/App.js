import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState(null);

  //API Endpoint
  const apiURL = 'https://www.anapioficeandfire.com/api/characters?pageSize=50';

  function fetchAPI() {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }

  const characterCards =
    characters &&
    characters.map((character, index) => {
      return (
        <div key={index} className='card m-3 ' style={{ width: '18rem' }}>
          {character.gender === 'Female' ? (
            <img
              src='https://images.pexels.com/photos/189389/pexels-photo-189389.jpeg?cs=srgb&dl=black-and-gray-ice-189389.jpg&fm=jpg'
              className='card-img-top'
              alt='...'
              width='250'
              height='200'
            />
          ) : (
            <img
              src='https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?cs=srgb&dl=photograph-of-a-burning-fire-672636.jpg&fm=jpg'
              className='card-img-top'
              alt='...'
              width='250'
              height='200'
            />
          )}

          <div className='card-body'>
            <h5 className='card-title text-center'>{character.name}</h5>
            <p className='card-text text-center small'>{character.gender}</p>
            <ul className='list-group list-group-flush m-2'>
              {character.playedBy[0] !== '' ? (
                <li className='list-group-item'>
                  Played By: {character.playedBy}
                </li>
              ) : null}

              {character.culture !== '' ? (
                <li className='list-group-item'>
                  Culture: {character.culture}
                </li>
              ) : null}
              {character.titles[0] !== '' ? (
                <li className='list-group-item'>Titles: {character.titles}</li>
              ) : null}
              {character.aliases[0] !== '' ? (
                <li className='list-group-item'>
                  Aliases: {character.aliases}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      );
    });

  return (
    <Fragment>
      <div className='d-flex flex-column m-3'>
        <h1 className='text-center'>Game of Thrones Characters</h1>
        <h2 className='text-center'>Fetch a list from an API and Display It</h2>
        <button
          className='d-flex justify-content-center btn btn-primary p-2 mt-3 mx-5'
          onClick={fetchAPI}>
          Fetch Data
        </button>
      </div>

      <div className='d-flex flex-wrap justify-content-center'>
        {characterCards}
      </div>
    </Fragment>
  );
};

export default App;
