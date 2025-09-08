import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery ,selectedFilters  } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
         
         let url = `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`;
         if (selectedFilters) {
          for (const [key, value] of Object.entries(selectedFilters)) {
            if (value) { // Only add the filter if a value is selected
              url += `&${key}=${encodeURIComponent(value)}`;
            }
          }
        }

        // Add this console log for debugging, you can remove it later
        console.log("Final Fetch URL:", url);

        const res = await axios.get(
          url,
          {
            withCredentials: true,
          }
        );
        console.log("API Response:", res.data);
        if (res.data.success) {
          // Updated success check
          dispatch(setAllJobs(res.data.jobs || []));
        } else {
          setError(res.data.message);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery, selectedFilters]);

  return { loading, error };
};

export default useGetAllJobs;


