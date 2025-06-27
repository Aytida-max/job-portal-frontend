import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal, Loader2, Eye } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';

const AdminJobsTable = () => {
  // 1. Fetch data and get loading/error states from your custom hook
  const { loading, error } = useGetAllAdminJobs();
  
  // 2. Get the jobs and search query from the Redux store
  const { allAdminJobs, searchJobByText} = useSelector((store) => store.job);
  const navigate = useNavigate();

  // 3. Compute the filtered list directly on each render. No need for useState/useEffect.
  const filteredJobs = allAdminJobs?.filter((job) => {
    if (!searchJobByText) return true; // If no search text, show all jobs
    return job.title?.toLowerCase().includes(searchJobByText.toLowerCase());
  }) || []; // Provide a fallback empty array to prevent errors

  // 4. Handle the loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center my-10">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-3 text-lg">Loading Jobs...</span>
      </div>
    );
  }

  // 5. Handle any potential errors
  if (error) {
    return <div className="text-red-500 text-center my-10">Error: {error}</div>;
  }

  return (
    <div>
      <Table>
        <TableCaption>Your recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* 6. Check if the final filtered list is empty */}
          {filteredJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                No jobs found.
              </TableCell>
            </TableRow>
          ) : (
            // 7. Map over the filtered jobs to create a row for each one
            filteredJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job?.company?.name || 'N/A'}</TableCell>
                <TableCell>{job.title}</TableCell>
                {/* ✅ THE FIX IS HERE */}
                <TableCell>
                  {/* First, check if job.createdAt exists. If not, show 'N/A'. */}
                  {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        // 8. Navigate to a specific edit page for the job
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-2 w-fit cursor-pointer"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                      <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 w-fit cursor-pointer mt-1">
                        <Eye className="w-4"></Eye>
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;