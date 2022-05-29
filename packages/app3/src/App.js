import React from 'react';
import LocalButton from './components/Button';
import LocalToast from './components/Toast';

const App = () => (
  <div>
    <h1>Bootstrap Host-Remote</h1>
    <h2>App 3</h2>
    <LocalButton />
    <hr />
    <LocalToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
    </LocalToast>
  </div>
);

export default App;
