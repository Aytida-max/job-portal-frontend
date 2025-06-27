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




// import { setAllJobs } from "@/redux/jobSlice";
// import { JOB_API_ENDPOINT } from "@/utils/data";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useGetAllJobs = () => {
//   const dispatch = useDispatch();
//   // 1. Get both the search query AND the selected filters from Redux
//   const { searchedQuery, selectedFilters } = useSelector((store) => store.job);

//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       try {
//         // 2. Build the URL dynamically based on search and filters
//         let url = `${JOB_API_ENDPOINT}/all?keyword=${searchedQuery}`;

//         // Append any selected filters to the URL
//         if (selectedFilters) {
//           for (const [key, value] of Object.entries(selectedFilters)) {
//             if (value) { // Only add the filter if a value is selected
//               url += `&${key}=${encodeURIComponent(value)}`;
//             }
//           }
//         }
        
//         const res = await axios.get(url, {
//           withCredentials: true,
//         });

//         // Assuming your backend returns { success: true, jobs: [...] }
//         if (res.data.success) {
//           dispatch(setAllJobs(res.data.jobs));
//         }
//       } catch (error) {
//         console.error("Fetch Error:", error);
//       }
//     };

//     fetchAllJobs();
//   }, [dispatch, searchedQuery, selectedFilters]); // 3. Re-run the effect when search or filters change

//   // This hook's main purpose is to dispatch data to Redux.
//   // It doesn't need to return anything unless a component needs its internal loading/error state.
//   return; 
// };

// export default useGetAllJobs;



// import { setAllJobs } from "@/redux/jobSlice";
// import { JOB_API_ENDPOINT } from "@/utils/data";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// // This hook is now designed to fetch ALL jobs, perfect for the homepage.
// const useGetAllJobs = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // The URL no longer includes the search query. It just gets all jobs.
//         const res = await axios.get(`${JOB_API_ENDPOINT}/get`, {
//           withCredentials: true,
//         });

//         // This logic remains the same: extract the jobs array from the response.
//         if (res.data && res.data.length > 0 && res.data[0].jobs) {
//           dispatch(setAllJobs(res.data[0].jobs));
//         } else {
//           dispatch(setAllJobs([])); // If API is successful but no jobs, set to empty.
//         }
//       } catch (error) {
//         console.error("Fetch Error:", error);
//         setError(error.message || "An error occurred while fetching jobs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllJobs();
//   }, [dispatch]); // The dependency array no longer needs searchedQuery.

//   return { loading, error };
// };

// export default useGetAllJobs;