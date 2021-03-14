import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel01.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel02.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel03.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>{' '}
          <div className="carousel-item">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel04.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>{' '}
          <div className="carousel-item">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel05.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>{' '}
          <div className="carousel-item">
            <div
              className="carousel-overlay-image"
              style={{backgroundImage: 'url(/images/carousel06.jpg)'}}
            />
            <div className="container carousel-container">
              <h1>Personalize & Send Postcards </h1>
              <Link to="/templates">
                <button type="button" className="btn btn-primary btn-lg mb-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-4">
            <h1 className="display-1">
              <i className="bi bi-shop" />
            </h1>
            <h2 className="mb-5">Shop</h2>
          </div>
          <div className="col-md-4">
            <h1 className="display-1">
              <i className="bi bi-pencil" />
            </h1>
            <h2 className="mb-5">Personalize</h2>
          </div>
          <div className="col-md-4">
            <h1 className="display-1">
              <i className="bi bi-envelope" />
            </h1>
            <h2 className="mb-5">Mail</h2>
          </div>
        </div>
        <p>
          Welcome to Easycard, where sending a simple postcard is just that -
          simple! You won't have to go to the store, waste time and money on an
          expensive card, only to get home to discover that you are out of
          postage stamps. Ugh!
        </p>
        <p>
          Instead, why not browse online in the comfort of your own home? Choose
          one of our beautiful postcards, personalize your message and click
          send. No more hunting postage stamps and putting something in the mail
          box! Your recipient gets a lovely card in the mail and you get more
          time to do other things! Win, win!
        </p>
        <p>Get started now and view our selection of stunning cards!</p>
      </div>
    </>
  )
}

export default Landing
