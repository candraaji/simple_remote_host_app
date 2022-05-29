import React from 'react';

const RemoteButton2 = React.lazy(() => import('app2/Button'));
const RemoteButton3 = React.lazy(() => import('app3/Button'));
const RemoteToast = React.lazy(() => import('app3/Toast'));

const App = () => (
  <div>
    <h1>Host-Remote App1 Demo</h1>
    <div>
       <h4>From App 2 Component</h4>
      <React.Suspense fallback="Loading Button">
        <RemoteButton2 />
      </React.Suspense>
    </div>
    <hr />
    <div>
      <h4>From App 3 Component</h4>
      <br />
      <React.Suspense fallback="Loading Button">
        <RemoteButton3 />
      </React.Suspense>
      <br /><br />
      <React.Suspense fallback="Loading Button">
        <RemoteToast>
           Can you Check Toast Component in App3 ?
        </RemoteToast>
      </React.Suspense>
    </div>
  </div>
);

export default App;
