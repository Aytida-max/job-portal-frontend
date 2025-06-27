import { setFilters } from '@/redux/jobSlice';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const filterData = [
  {
    filterType: "location",
    array: [
      "Delhi", "Mumbai", "Kolhapur", "Pune", "Bangalore",
      "Hyderabad", "Chennai", "Remote",
    ],
  },
  {
    filterType: "jobType",
    array: [
      "Mern", "React", "Data Scientist", "Fullstack", "Node",
      "Python", "Java", "frontend", "backend", "mobile", "desktop",
    ],
  },
  {
    filterType: "experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filtercard = () => {
  // 2. Get dispatch and the current filters from Redux
    const dispatch = useDispatch();
    const { selectedFilters } = useSelector((store) => store.job);

    // 3. Handler to dispatch the update action
    // const handleFilterChange = (filterType, value) => {
    //     dispatch(setFilters({ filterType, value }));
    // };


  const handleFilterClick = (filterType, value) => {
        // Check if the item being clicked is already the active filter
        if (selectedFilters[filterType] === value) {
            // If it is, clear this filter by setting it to an empty string
            dispatch(setFilters({ filterType, value: "" }));
        } else {
            // Otherwise, set the new filter value as normal
            dispatch(setFilters({ filterType, value }));
        }
    };

  return (
    <div className="w-full bg-white rounded-md p-4">
      <h1 className="font-bold text-lg mb-3">Filter Jobs</h1>
      <hr className="mt-3 mb-4" />

      {filterData.map((dataSection) => (
        <div key={dataSection.filterType} className="mb-5">
          <h2 className="font-bold text-lg mb-2">{dataSection.filterType.charAt(0).toUpperCase() + dataSection.filterType.slice(1)}</h2>
          <RadioGroup 
          value={selectedFilters[dataSection.filterType]}
          // onValueChange={(value) => handleFilterChange(dataSection.filterType, value)}
          className="space-y-1">
            {dataSection.array.map((item) => {
              const itemId = `${dataSection.filterType}-${item}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-1"
                onClick={() => handleFilterClick(dataSection.filterType, item)}>
                  {/* Added Tailwind classes for styling RadioGroupItem */}
                  <RadioGroupItem
                    value={item}
                    id={itemId}
                    className="
                      h-4 w-4 rounded-full border border-gray-300 
                      text-sky-600 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2
                      data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600
                    "
                  >
                    {/* This inner div creates the dot for the checked state */}
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="h-1.5 w-1.5 rounded-full bg-white data-[state=unchecked]:bg-transparent data-[state=checked]:bg-white"></div>
                    </div>
                  </RadioGroupItem>
                  <label
                    htmlFor={itemId}
                    className="text-sm cursor-pointer select-none" // Added select-none to prevent text selection on rapid clicks
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default Filtercard;