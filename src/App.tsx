// src/App.tsx
import React from 'react';
import { InputField } from './movai_code/components/InputField';

const App: React.FC = () => {
  return (
    <div>
      <h1>Application avec InputContext</h1>
      <InputField /> {/* Assure-toi que InputField est utilisé ici */}
    </div>
  );
};

export default App;
