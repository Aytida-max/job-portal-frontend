import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector((store) => store.company);
    const navigate = useNavigate();
    const [filterCompany, setFilterCompany] = useState(companies);

    // [MODIFIED PART]
    useEffect(() => {
        // This ensures you are always filtering an array.
        // If 'companies' is null or undefined, it defaults to [],
        // and filtering an empty array correctly results in an empty array.
        const safeCompanies = companies || []; 

        const filteredCompany = safeCompanies.filter((company) => {
            if (!searchCompanyByText) {
                return true;
            }
            return company?.name
                ?.toLowerCase()
                .includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    if (!companies) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <Table>
                <TableCaption>Your recent registered Companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterCompany.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan="4" className="text-center">No Company Found</TableCell>
                        </TableRow>
                    ) : (
                        filterCompany?.map((company) => (
                            <TableRow key={company._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage
                                            src={company.logo || "/placeholder-logo.png"}
                                            alt={company.name}
                                        />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{new Date(company.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div
                                                onClick={() => navigate(`/admin/companies/${company._id}`)}
                                                className="flex items-center gap-2 w-fit cursor-pointer"
                                            >
                                                <Edit2 className="w-4"  />
                                                <span>Edit</span>
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

export default CompaniesTable;