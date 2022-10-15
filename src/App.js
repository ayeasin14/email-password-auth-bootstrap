import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBoostrap from './components/LoginBoostrap';
import RegisterReactBooststrap from './components/RegisterReactBooststrap';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBooststrap></RegisterReactBooststrap>
      },
      {
        path: '/register',
        element: <RegisterReactBooststrap></RegisterReactBooststrap>
      },
      {
        path: '/login',
        element: <LoginBoostrap></LoginBoostrap>
      },
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
