
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'


function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Home />,
    children: [
      // {
      //   path: "/",
      //   element: </>,
      // }
    ]
  }])
  return (
    <div className="h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App
