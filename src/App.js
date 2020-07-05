import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
  const [houses, setHouses] = useState(null);

  //API Endpoint
  const apiURL = 'https://www.anapioficeandfire.com/api/houses?pageSize=50';

  function fetchAPI() {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      });
  }

  const housesCards =
    houses &&
    houses.map((house, index) => {
      return (
        <div key={index} className='card m-3 ' style={{ width: '18rem' }}>
          {index % 2 === 0 ? (
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
            <h5 className='card-title text-center'>{house.name}</h5>
            <p className='card-text text-center small'>{house.region}</p>
            <ul className='list-group list-group-flush m-2'>
              {house.coatOfArms !== '' ? (
                <li className='list-group-item'>
                  Coat of Arms: {house.coatOfArms}
                </li>
              ) : null}

              {house.words !== '' ? (
                <li className='list-group-item'>Words: {house.words}</li>
              ) : null}
              {house.seats[0] !== '' ? (
                <li className='list-group-item'>Seats: {house.seats}</li>
              ) : null}
              {house.diedOut !== '' ? (
                <li className='list-group-item'>Died Out: {house.diedOut}</li>
              ) : null}
            </ul>
          </div>
        </div>
      );
    });

  return (
    <Fragment>
      <div className='d-flex flex-column m-3'>
        <h1 className='text-center'>Game of Thrones</h1>
        <h2 className='text-center'>Houses</h2>

        <button
          className='d-flex justify-content-center btn btn-primary p-2 mt-3 mx-5'
          onClick={fetchAPI}>
          Start Search
        </button>
      </div>

      <div className='d-flex flex-wrap justify-content-center'>
        {housesCards}
      </div>
    </Fragment>
  );
};

export default App;
