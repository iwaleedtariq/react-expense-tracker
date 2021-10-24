import React from 'react';
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { Provider } from './context/context';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="1c5b7c39-0d26-475c-960c-934f84c2f712" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);