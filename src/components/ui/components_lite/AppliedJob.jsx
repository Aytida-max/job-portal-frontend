import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Badge } from "../badge";
import { useSelector } from "react-redux";
import { 
  Calendar, 
  Briefcase, 
  Building2, 
  CheckCircle, 
  Clock, 
  XCircle,
  AlertCircle,
  FileText
} from "lucide-react";

const AppliedJob = () => {
  const {allAppliedJobs} = useSelector((store)=>store.job);
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-400" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-400" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'accepted':
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30 transition-all duration-300">
            {getStatusIcon(status)}
            <span className="ml-1 capitalize">{status}</span>
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30 transition-all duration-300">
            {getStatusIcon(status)}
            <span className="ml-1 capitalize">{status}</span>
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300">
            {getStatusIcon(status)}
            <span className="ml-1 capitalize">{status}</span>
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30 hover:bg-gray-500/30 transition-all duration-300">
            {getStatusIcon(status)}
            <span className="ml-1 capitalize">{status}</span>
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {allAppliedJobs.length <= 0 ? (
        <div className="text-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-gray-500/20 rounded-full">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">No Applications Yet</h3>
              <p className="text-gray-400">You haven't applied to any jobs yet. Start exploring opportunities!</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass border border-white/20 rounded-xl overflow-hidden">
          <Table>
            <TableCaption className="text-gray-400 py-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Recent Applied Jobs ({allAppliedJobs.length})
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  Date Applied
                </TableHead>
                <TableHead className="text-white font-semibold flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-green-400" />
                  Job Title
                </TableHead>
                <TableHead className="text-white font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-purple-400" />
                  Company
                </TableHead>
                <TableHead className="text-right text-white font-semibold">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allAppliedJobs.map((appliedJob) => (
                <TableRow 
                  key={appliedJob._id} 
                  className="border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      {new Date(appliedJob?.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="text-white font-medium">
                    {appliedJob.job?.title || 'N/A'}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-purple-400" />
                      {appliedJob.job?.company?.name || 'N/A'}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {getStatusBadge(appliedJob?.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AppliedJob;