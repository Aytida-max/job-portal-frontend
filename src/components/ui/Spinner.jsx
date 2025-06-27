// src/components/Spinner.jsx

import React from 'react';
import { Loader2 } from 'lucide-react'; // This is an icon library

// Make sure you have lucide-react installed:
// npm install lucide-react

const Spinner = () => {
  // The 'animate-spin' class from Tailwind CSS makes the icon rotate
  return <Loader2 className="h-12 w-12 animate-spin" />;
};

export default Spinner;