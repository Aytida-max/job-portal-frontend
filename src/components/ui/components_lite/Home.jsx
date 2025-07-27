import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Categories from './Categories'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader2, AlertCircle } from 'lucide-react'

const Home = () => {
  const { loading, error } = useGetAllJobs();
  const jobs = useSelector((state) => state.job.allJobs);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      <Header />
      <Categories />
      
      {/* Jobs Section with Loading States */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="glass border border-white/20 rounded-2xl p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Loading Latest Jobs
                </h3>
                <p className="text-gray-400">
                  Please wait while we fetch the latest opportunities...
                </p>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="glass border border-white/20 rounded-2xl p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <AlertCircle className="h-12 w-12 text-red-400" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Error Loading Jobs
                </h3>
                <p className="text-gray-400">
                  {error || "Something went wrong. Please try again later."}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LatestJobs jobs={jobs} />
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default Home
