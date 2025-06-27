import React, { useEffect, useState } from 'react'
import Navbar from '../ui/components_lite/Navbar'

import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { searchCompanyByText } from '@/redux/companySlice'
import { useDispatch } from 'react-redux'

const Companies = () => {
  useGetAllCompanies();
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchCompanyByText(input));

  },[input])
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/> 
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by Name"
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button onClick={() => navigate("/admin/companies/create")}>
            Add Company
          </Button>
        </div>
        <div>
          <CompaniesTable />
        </div>
      </div>
    </div>
  )
}

export default Companies
