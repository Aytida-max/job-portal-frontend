import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
// import axios from "axios";
import API from "@/api/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchJobByText } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        // const res = await axios.get(
        //   `${JOB_API_ENDPOINT}/getadminjobs?keyword=${searchJobByText}`,
        //   {
        //     withCredentials: true,
        //   }
        // );
        const res = await API.get(`/job/getadminjobs?keyword=${searchJobByText}`);
        console.log("API Response:", res.data);
        if (res.data.status) {
          // Updated success check
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch, searchJobByText]);

  return { loading, error };
};


export default useGetAllAdminJobs
