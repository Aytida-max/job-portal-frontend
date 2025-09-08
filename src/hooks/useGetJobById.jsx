import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import API from "@/api/axios";
import { JOB_API_ENDPOINT } from "@/utils/data";

const useGetJobById = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleJob = async () => {
        console.log("HOOK: Attempting to fetch job with ID:", id);
      try {
        // const res = await axios.get(`${JOB_API_ENDPOINT}/get/${id}`, {
        //   withCredentials: true,
        // });
        const res = await API.get(`/job/get/${id}`);
        //
        console.log("HOOK: API Response Received:", res.data); 
        if (res.data.status) {
            //
            console.log("HOOK: Success! Dispatching job data."); 
          dispatch(setSingleJob(res.data.job));
          // setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
        }
        else{
            console.error("HOOK: API call did not have 'success: true'. Response:", res.data);
        }
      } catch (error) {
        console.error("HOOK: API call failed with an error:", error);
      }
    };
    if (id) {
        fetchSingleJob();
    }
  }, [id, dispatch]);
};

export default useGetJobById;