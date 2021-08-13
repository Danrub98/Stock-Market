// Lets start with Link basic header
// We have to import react
import React from "react";

import Mountain from "../images/mountain.jpg";


const Home = () => {
  return (
    <main>
      <div class="container-fluid home-container" style={{ backgroundImage:  `url(${Mountain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h1 className="home-text">Investing is equal to financial freedom</h1>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search For Stocks"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </main>
  );
};

// Export the footer
export default Home;
