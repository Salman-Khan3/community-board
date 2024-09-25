import React from 'react';
import './App.css';

const FoodTrucks = () => {
  const trucks = [
    { name: 'Birria-Landia', cuisine: 'Mexican', image: 'https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' },
    { name: 'Mysttik Masala', cuisine: 'Indian', image: 'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' },
    { name: 'The Halal Guys', cuisine: 'Middle Eastern', image: 'https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' },
  ];

  return (
    <div className="food-trucks">
      <h1>Food Truck Favorites</h1>
      <div className="trucks-container">
        {trucks.map((truck, index) => (
          <div key={index} className="truck">
            <img src={truck.image} alt={truck.name} />
            <h2>{truck.name}</h2>
            <p>{truck.cuisine}</p>
            <button>View Menu</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Community Board</h1>
      </header>
      <main>
        <FoodTrucks />
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Community Board</p>
      </footer>
    </div>
  );
}

export default App;
