// src/main.tsx ou src/index.tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';  // Assure-toi que le store Redux est ici
import { InputProvider } from './movai_code/context/InputContext'; // Import du InputProvider
import store from './movai_code/redux/store';  // Import du store Redux
import App from './App';  // L'application principale
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>  {/* Redux store provider */}
        <InputProvider> {/* InputContext provider */}
            <BrowserRouter> {/* Ajoute le routage */}
                <App /> {/* Composant principal */}
            </BrowserRouter>
        </InputProvider>
    </Provider>
);
