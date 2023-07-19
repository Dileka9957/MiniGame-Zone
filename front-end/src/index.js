import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GoogleOAuthProvider } from '@react-oauth/google';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';


// style + assets
import 'assets/scss/style.scss';
import config from './config';
import { ThemeProvider } from 'layout/Customization/themeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ==============================|| REACT DOM RENDER  ||============================== //



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <GoogleOAuthProvider clientId="862901280150-r12s47uku8p1vutqnjhagfgkppk81qq2.apps.googleusercontent.com">
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
     </GoogleOAuthProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
