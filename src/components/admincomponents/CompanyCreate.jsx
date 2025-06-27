// import React, { useState } from 'react'
// import Navbar from '../ui/components_lite/Navbar'
// import { useNavigate } from 'react-router-dom'
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import axios from 'axios';
// import { COMPANY_API_ENDPOINT } from '@/utils/data';
// import { toast } from 'sonner';
// import { useDispatch } from 'react-redux';
// import { setSingleCompany } from '@/redux/companySlice';

// const CompanyCreate = () => {
//     const [companyName,setCompanyName] = useState()
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const registerNewCompany = async () => {
//         try {
//             const res = await axios.post(`${COMPANY_API_ENDPOINT}/register`,{companyName},{


//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 withCredentials:true,
//             })

//             console.log(res.data);
//             if(res?.data?.success){
//                 dispatch(setSingleCompany(res.data.company));
//                 toast.success(res.data.message);
//                 const companyId = res?.data?.company?._id;
//                 navigate(`/admin/companies/${companyId}`);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }
//   return (
//     <div>
//       <Navbar/>
//       <div className="max-w-4xl mx-auto">
//         <div className="my-10">
//           <h1 className="font-bold text-2xl ">Company Name</h1>
//           <p className="text-gray-600">Company Description</p>
//         </div>
//         <Label>Company Name</Label>
//         <Input
//           type="text"
//           placeholder="Company Name"
//           className="my-2"
//           onChange={(e) => setCompanyName(e.target.value)}
//         />

//         <div className="flex items-center gap-2 my-10">
//           <Button
//             variant="outline"
//             onClick={() => navigate("/admin/companies")}
//           >
//             Cancel
//           </Button>
//           <Button onClick={registerNewCompany}>Continue</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CompanyCreate
import React, { useState } from 'react';
import Navbar from '../ui/components_lite/Navbar';
import { useNavigate } from 'react-router-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { COMPANY_API_ENDPOINT } from '@/utils/data';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import { Textarea } from '../ui/textarea'; // 1. Import Textarea for the description

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState(""); // Initialize with empty string
  const [description, setDescription] = useState(""); // 2. Add state for description
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      // 3. Send both companyName and description to the backend
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName: companyName, description: description }, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl ">Company Details</h1>
          <p className="text-gray-600">Provide the company's name and description.</p>
        </div>
        <div className='my-4'>
          <Label>Company Name</Label>
          <Input
            type="text"
            value={companyName} // Controlled component
            placeholder="e.g., Google, Microsoft"
            className="my-2"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* 4. Add the input field for the description */}
        <div className='my-4'>
            <Label>Company Description</Label>
            <Textarea
                value={description} // Controlled component
                placeholder="What does this company do?"
                className="my-2"
                onChange={(e)=>setDescription(e.target.value)}
            />
        </div>

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;