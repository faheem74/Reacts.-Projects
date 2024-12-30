// Install Tailwind CSS in your React project before using this code
// Refer to the Tailwind CSS documentation: https://tailwindcss.com/docs/installation

import {} from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <p className="text-sm">
              Explore
              <br />
              our
              <br />
              extensive
              <br />
              library
              <br />
              of
              <br />
              resources.
            </p>
          </div>

          {/* State Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <p className="text-sm">
              Stay
              <br />
              updated
              <br />
              with
              <br />
              the
              <br />
              latest
              <br />
              news.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p className="text-sm">
              Learn
              <br />
              more
              <br />
              about
              <br />
              our
              <br />
              company
              <br />
              values.
            </p>
          </div>

          {/* Promotion and Discount Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Promotion & Discount</h3>
            <p className="text-sm">
              Discover
              <br />
              exciting
              <br />
              promotions
              <br />
              and
              <br />
              discounts
              <br />
              today.
            </p>
          </div>
        </div>
      </div>
      <br/> <br />
    <center>  <p>@2024 Nike,Inc. All Right Received Guide Terms Of Sales Nike Privacy Policy</p></center>
      
    </footer>
    
  );
};

export default Footer;

