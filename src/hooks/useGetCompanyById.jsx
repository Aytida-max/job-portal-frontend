import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
// import axios from "axios";
import API from "@/api/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        // const res = await axios.get(
        //   `${COMPANY_API_ENDPOINT}/get/${companyId}`,
        //   { withCredentials: true }
        // );
        const res = await API.get(`/company/get/${companyId}`);
        dispatch(setSingleCompany(res.data.company));
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    if (companyId) {
      fetchSingleCompany();
    }
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
