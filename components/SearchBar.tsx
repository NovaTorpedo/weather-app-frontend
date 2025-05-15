import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City name"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
      >
        GO
      </button>
    </form>
  );
};

export default SearchBar;