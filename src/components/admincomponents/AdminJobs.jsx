import React, { useEffect, useState } from 'react'
import Navbar from '../ui/components_lite/Navbar'

import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { searchCompanyByText } from '@/redux/companySlice'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllCompanies();
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setSearchJobByText(input));

  },[input])
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/> 
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by Role"
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button  onClick={() => navigate("/admin/jobs/create")}  >
            Post New Job
          </Button>
        </div>
        <div>
          <AdminJobsTable/>
        </div>
      </div>
    </div>
  )
}


export default AdminJobs;
