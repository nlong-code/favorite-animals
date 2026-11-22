
import { useState } from "react";
import animals from "../data.js";

function PetList({ selectedAnimal }) {
  const [search, setSearch] = useState("");

  const searchTerm = search.toLowerCase().trim();

  const filteredAnimals = animals.filter((pet) => {
    const matchesAnimal =
      selectedAnimal === "All" ||
      pet.animal.toLowerCase() === selectedAnimal.toLowerCase();

    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm) ||
      pet.animal.toLowerCase().includes(searchTerm);

    return matchesAnimal && matchesSearch;
  });

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search animals by name or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((pet) => (
            <div className="col-md-4 col-sm-6 mb-4" key={pet.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={pet.imageUrl}
                  className="card-img-top"
                  alt={`${pet.name}, a ${pet.animal}`}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">
                    Animal: {pet.animal}
                  </p>
                  <p className="card-text">
                    {pet.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No animals found. Try another search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PetList;
 