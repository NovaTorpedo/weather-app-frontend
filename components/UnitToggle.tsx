import React from 'react';

interface UnitToggleProps {
  units: 'metric' | 'imperial';
  onChange: (units: 'metric' | 'imperial') => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ units, onChange }) => {
  return (
    <div className="flex border rounded overflow-hidden">
      <button
        className={`px-3 py-2 ${units === 'metric' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        onClick={() => onChange('metric')}
        aria-label="Celsius"
      >
        °C
      </button>
      <button
        className={`px-3 py-2 ${units === 'imperial' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        onClick={() => onChange('imperial')}
        aria-label="Fahrenheit"
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;