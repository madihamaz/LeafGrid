import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2"> {/* Reduced vertical padding */}
      <div className="container mx-auto p-4 md:p-6"> {/* Added padding to the container */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-1 md:mb-0"> {/* Reduced bottom margin */}
            <h5 className="font-bold text-md">Contact Information</h5> {/* Reduced font size */}
            <p className="text-gray-400 text-sm">Email: contact@yourcompany.com</p> {/* Reduced font size */}
            <p className="text-gray-400 text-sm">Phone: (123) 456-7890</p> {/* Reduced font size */}
            <p className="text-gray-400 text-sm">Address: 123 Your Street, City, Country</p> {/* Reduced font size */}
          </div>
          <div className="text-center mb-1 md:mb-0"> {/* Reduced bottom margin */}
            <p className="text-2xl font-semibold">Incubated at</p> {/* Reduced font size */}
            <img 
              src="src/components/hey.png" 
              alt="Company Logo" 
              style={{ width: '200px', height: 'auto' }} // Reduced logo size
              className="mt-1 mb-1" // Adjusted margins
            />
          </div>
        </div>
        <div className="text-center mt-2"> {/* Reduced top margin */}
          <p className="text-xs">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p> {/* Reduced font size */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;