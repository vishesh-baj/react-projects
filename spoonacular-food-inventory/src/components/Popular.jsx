import React, { useEffect, useState } from "react";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log("DATA: ", data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      {popular.map(({ id, title }) => {
        return (
          <div key={id}>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
