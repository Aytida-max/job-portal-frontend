import { setFilters } from '@/redux/jobSlice';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin, Code, Clock, DollarSign, X } from 'lucide-react';
import { Badge } from '../badge';

const filterData = [
  {
    filterType: "location",
    array: [
      "Delhi", "Mumbai", "Kolhapur", "Pune", "Bangalore",
      "Hyderabad", "Chennai", "Remote",
    ],
    icon: MapPin,
    color: "from-blue-500 to-cyan-500"
  },
  {
    filterType: "jobType",
    array: [
      "Mern", "React", "Data Scientist", "Fullstack", "Node",
      "Python", "Java", "frontend", "backend", "mobile", "desktop",
    ],
    icon: Code,
    color: "from-purple-500 to-pink-500"
  },
  {
    filterType: "experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
    icon: Clock,
    color: "from-green-500 to-emerald-500"
  },
  {
    filterType: "salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500"
  },
];

const Filtercard = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((store) => store.job);

  const handleFilterClick = (filterType, value) => {
    if (selectedFilters[filterType] === value) {
      dispatch(setFilters({ filterType, value: "" }));
    } else {
      dispatch(setFilters({ filterType, value }));
    }
  };

  const clearAllFilters = () => {
    filterData.forEach(({ filterType }) => {
      dispatch(setFilters({ filterType, value: "" }));
    });
  };

  const hasActiveFilters = Object.values(selectedFilters).some(value => value !== "");

  return (
    <div className="glass border border-white/20 rounded-xl p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(selectedFilters).map(([filterType, value]) => {
              if (value) {
                const filterInfo = filterData.find(f => f.filterType === filterType);
                const IconComponent = filterInfo?.icon;
                return (
                  <Badge
                    key={`${filterType}-${value}`}
                    variant="glass"
                    className="flex items-center gap-1 cursor-pointer hover:bg-white/20 transition-colors duration-300"
                    onClick={() => handleFilterClick(filterType, value)}
                  >
                    {IconComponent && <IconComponent className="h-3 w-3" />}
                    {value}
                    <X className="h-3 w-3" />
                  </Badge>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      {/* Filter Sections */}
      <div className="space-y-6">
        {filterData.map((dataSection) => {
          const IconComponent = dataSection.icon;
          return (
            <div key={dataSection.filterType} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${dataSection.color}`}>
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-semibold text-white capitalize">
                  {dataSection.filterType}
                </h3>
              </div>
              
              <RadioGroup 
                value={selectedFilters[dataSection.filterType]}
                className="space-y-2"
              >
                {dataSection.array.map((item) => {
                  const itemId = `${dataSection.filterType}-${item}`;
                  const isSelected = selectedFilters[dataSection.filterType] === item;
                  
                  return (
                    <div 
                      key={itemId} 
                      className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/5"
                      onClick={() => handleFilterClick(dataSection.filterType, item)}
                    >
                      <RadioGroupItem
                        value={item}
                        id={itemId}
                        className={`
                          h-4 w-4 rounded-full border-2 transition-all duration-300
                          ${isSelected 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-white/30 hover:border-white/50'
                          }
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50
                        `}
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            isSelected ? 'bg-white' : 'bg-transparent'
                          }`}></div>
                        </div>
                      </RadioGroupItem>
                      <label
                        htmlFor={itemId}
                        className={`text-sm cursor-pointer select-none transition-colors duration-300 ${
                          isSelected ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filtercard;