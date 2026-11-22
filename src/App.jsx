
/*
Assignment: Favorite Pets and Animals
Student: Norma Long
Date: November 21, 2026

Purpose:
Main React application.
Allows users to filter animals by category
and displays the PetList component.
*/

import { useState } from "react";
import PetList from "./components/PetList";

function App() {

  // Stores the animal category selected by the user.
  const [selectedAnimal, setSelectedAnimal] = useState("All");

  return (
    <div>

      {/* Application heading */}
      <header className="text-center bg-primary text-white p-4">
        <h1>My Favorite Animals</h1>
        <p>Welcome to my animal collection!</p>
      </header>

      <main className="container mt-4">

        {/* Animal category filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-5">

            <label
              htmlFor="animalFilter"
              className="form-label fw-bold"
            >
              Filter by Animal Type:
            </label>

            <select
              id="animalFilter"
              className="form-select"
              value={selectedAnimal}
              onChange={(event) =>
                setSelectedAnimal(event.target.value)
              }
            >
              <option value="All">All Animals</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
              <option value="Rabbit">Rabbits</option>
              <option value="Bird">Birds</option>
            </select>

          </div>
        </div>

        {/* Displays animals based on selected category */}
        <PetList selectedAnimal={selectedAnimal} />

      </main>

      <footer className="text-center bg-light p-3 mt-5">
        <p className="mb-0">
          Favorite Animals Project | Created by Norma Long
        </p>
      </footer>

    </div>
  );
}

export default App;
