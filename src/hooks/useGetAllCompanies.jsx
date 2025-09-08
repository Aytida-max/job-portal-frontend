import { setCompanies } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import API from "@/api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // const res = await API.get(`${COMPANY_API_ENDPOINT}/get`, {
        //   withCredentials: true,
        // });
        const res = await API.get('/company/get');
        console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();
  }, [dispatch]);
};

export default useGetAllCompanies;