import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from './components/Home.jsx'
import { Suspense, lazy } from 'react'
import "./components/index.css"

const Login = lazy(() => import('./components/Login.jsx'))
const Register = lazy(() => import('./components/Register.jsx'))
const History = lazy(() => import('./components/History.jsx'))
const WatchLater = lazy(() => import('./components/WatchLater.jsx'))
const LikedVideos = lazy(() => import('./components/LikedVideos.jsx'))
const NotFound = lazy(() => import('./components/NotFound.jsx'))

const appRouter = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <Login /> </Suspense>
    },
    {
      path: "/register",
      element: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <Register /> </Suspense>
    },
    {
      path: "/history",
      element: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <History /> </Suspense>
    },
    {
      path: "/watchlater",
      element: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <WatchLater /> </Suspense>
    },
    {
      path: "/likedvideos",
      element: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <LikedVideos /> </Suspense>
    },
  ],
  errorElement: <Suspense fallback={<h1 className='text-center text-3xl'>Loading...</h1>}> <NotFound /> </Suspense>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
