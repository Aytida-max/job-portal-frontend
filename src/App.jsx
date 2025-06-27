import React from 'react'
import {Button} from './components/ui/button'
import Navbar from './components/ui/components_lite/Navbar'
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Home from './components/ui/components_lite/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import PrivacyPolicy from './components/ui/components_lite/PrivacyPolicy';
import TermsofService from './components/ui/components_lite/TermsofService';
import Jobs from './components/ui/components_lite/Jobs.jsx';
import Browse from './components/ui/components_lite/Browse';
import Profile from './components/ui/components_lite/Profile';
import Description from './components/ui/components_lite/Description';
import Companies from './components/admincomponents/Companies';
import CompanyCreate from './components/admincomponents/CompanyCreate';
import CompanySetup from './components/admincomponents/CompanySetup';
import AdminJobs from './components/admincomponents/AdminJobs';
import PostJob from './components/admincomponents/PostJob';
import Applicants from './components/admincomponents/Applicants';
import useGetMe from './hooks/useGetMe';
import ProtectedRoute from './components/admincomponents/ProtectedRoute';

const appRouter = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/PrivacyPolicy",
    element:<PrivacyPolicy/>
  },
  {
    path:"/TermsofService",
    element:<TermsofService/>
  },
  {
    path:"/",
    element:<Home/>,
  },
  
  {
    path:"/Profile",
    element:<Profile/>,
  },
  {
    path:"/description/:id",
    element:<Description/>,
  },
  
  
  {
    path:"/Jobs",
    element:<Jobs/>
  },
  {
    path:"/Browse",
    element:<Browse/>
  },


  //admin
  {
    path:"/admin/companies",
    element: (
      <ProtectedRoute>
      <Companies/>
      </ProtectedRoute>
    ),
  },
  
  {
    path:"/admin/companies/create",
    element: (
      <ProtectedRoute>
      <CompanyCreate/>
      </ProtectedRoute>
    ),
  },
  
  {
    path:"/admin/companies/:id",
    element: (
      <ProtectedRoute>
      <CompanySetup/>
      </ProtectedRoute>
    ),
  },

  
  {
    path:"/admin/jobs",
    element: (
      <ProtectedRoute>
      <AdminJobs/>
      </ProtectedRoute>
    ),
  },
  
  {
    path:"/admin/jobs/create",
    element: (
      <ProtectedRoute>
      <PostJob/>
      </ProtectedRoute>
    ),
  },

  {
    path:"/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
      <Applicants/>
      </ProtectedRoute>
    ),
  },



]);
function App() {
  useGetMe();
  return (
    <div>
        <RouterProvider router = {appRouter}></RouterProvider>
    </div>
  )
}

export default App
