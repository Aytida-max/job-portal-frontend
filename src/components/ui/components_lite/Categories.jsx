import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import { Button } from "../button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { 
  Code, 
  Database, 
  Layers, 
  Globe, 
  Brain, 
  Server, 
  Cpu, 
  Bot, 
  Shield, 
  Target, 
  Palette, 
  Monitor, 
  Image, 
  Video 
} from "lucide-react";

const Category = [
  { name: "Frontend Developer", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Developer", icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "Full Stack Developer", icon: Layers, color: "from-purple-500 to-pink-500" },
  { name: "Mern Developer", icon: Globe, color: "from-yellow-500 to-orange-500" },
  { name: "Data Scientist", icon: Brain, color: "from-indigo-500 to-blue-500" },
  { name: "DevOps Engineer", icon: Server, color: "from-red-500 to-pink-500" },
  { name: "Machine Learning Engineer", icon: Cpu, color: "from-teal-500 to-cyan-500" },
  { name: "Artificial Intelligence Engineer", icon: Bot, color: "from-violet-500 to-purple-500" },
  { name: "Cybersecurity Engineer", icon: Shield, color: "from-rose-500 to-red-500" },
  { name: "Product Manager", icon: Target, color: "from-amber-500 to-yellow-500" },
  { name: "UX/UI Designer", icon: Palette, color: "from-fuchsia-500 to-pink-500" },
  { name: "Graphics Engineer", icon: Monitor, color: "from-sky-500 to-blue-500" },
  { name: "Graphics Designer", icon: Image, color: "from-emerald-500 to-green-500" },
  { name: "Video Editor", icon: Video, color: "from-orange-500 to-red-500" },
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Find Your Niche
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore opportunities by specialization and discover your perfect career path
        </p>
      </div>
      
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {Category.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Button 
                  onClick={() => searchjobHandler(category.name)}
                  className="w-full h-32 glass border border-white/10 hover:border-white/30 hover-lift group"
                  variant="ghost"
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                      {category.name}
                    </span>
                  </div>
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40" />
        <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40" />
      </Carousel>
    </div>
  );
};

export default Categories;