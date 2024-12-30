import { useState } from "react";

const Hero = () => {
  // Array of shoe images
  const shoes = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/7b28/ea10/30996bfa3ab0eabc231dc660d34cdd59?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKj5n~bXjZI~zMfY9Q1FxtYB6XGYwsmdGH676bdSecyvfE8hPaKJ3rAk0OEoGoYpjrgj3NU0SjJU42pXfFGB-5P~IlVMz68P2pT~MmKeiO4LmCh9Lt-zuYvpEgPJZBB15XIIVnVmRglQj4B2Ptmu83lhX9Z8wX3tCkmwvLVXWnBpZzkdxyWriZ7oJyc0RCMARgs4lcIondex41FF8sQxh9Qer3UtqjF1fwRnkie-rLV5r8OC9reCpPadpJHd3AQP6qNfQLGS2eA1WftxAfYDWMhvNLYEG5~al~gQdb3Q3Cv01vixqHArAyyZEtmzNHregRBVkGjP~uD9Gr6oVjl8Xw__",
      alt: "Shoe 1",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/c536/1068/44470255becf7766c563eac889122a9c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8xYjK~0AOd1sjQcTy5bBhdpkc8SLvvO3knCFyIQJYQASEuBZQF6TOL7zbNRXuep4rCfnFmjXDoGCwOZkWUwyonWd2wCm~HWFe9IlzyvVYiFV9e5YeNB2zGoLC8MkDTn15QGiS27rXs3IprE5S0OIvZ81cRCfDO48y0kk~Ccr8-vZY9qW-J~eGnHi4AbATmVybzfkiLQDKUevNfuhsdIloSZ1TkgnYfG8NiLHkpUnSlGdrNMNbtg8-ZYArXxIbhDPmbfj87fw7LRSITBnItlPEUEqb4LW-yOFBC6EYXaiyyp0vgvFumcPB07jLHr~dIdYcTjHKqip08EQOBHQSlZiw__",
      alt: "Shoe 2",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/ec50/3311/0789c825df6826094b6c5e2bec28a7f7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMZ~JswGDHfm9Y6nrpS-sPUwZDlHrJpLojSeyjwqD0Ff2hUEwVzlc2kw6Q-RiD1fM41ty8qMbdOz8NzPp4VtWTxyiKCGGFOtSm-z2AmoLAWufenrPqBRp4znFcxACpSHdbBw2i8ChuPlvPLCPB1sjYqJMSSIjKvFLCHTbNBbAJTbWxkkQQ5JWbUGEafs~8EyoTB5OzCoEbvAMsr3IvLR9q3b-MyStnyTeQQGTyOaFZQHv54eNsMrjRRMSYAw4hMY6RorZkvNv~i77s8HDx4TOzJHv6f1f2rYapUyWBwiQxa2j1cFpZHbA8AxE43sT6i0TSq31NKn20hVLq~WM5oRzg__",
      alt: "Shoe 3",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/e08b/a07e/3e8ad0abf5b08a382a5a58d6a7d16617?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbDNw-YT-NlZOqSZDRpmmnQ9LSj7joIA6r30ciTLJ29VfYZEBQA8Ru99O3uwS6woLM16kVYYqg03CtJ7v2g60xP5qA3FwKvczrqd5~srle~eWA5QpWShGHWaXmodRtOeXaxp~if-j3HwR01gT5dg~pbobfGeGAz2Z9RFe9H9~IG9fSFN3z3XcHS3jEdI1tv1PVI7h~Jhvb0rYW9qXgEDt0LFqENThchvBeBOwEhQS47EFTE769BJ6bcEtRL~rN4h2qyeSG~arWizY2BRLUh70DKipyDNUvxr63ndU-tIsLhgL6XFCggQ~MV~oZVS7H~FQvqs9Yt5ejjjTyA1tK-wLg__",
      alt: "Shoe 4",
    },
  ];

  // State for selected shoe
  const [selectedShoe, setSelectedShoe] = useState(shoes[0].src);

  return (
    <div className="flex flex-col md:flex-row p-8 items-start">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 relative">
        {/* Main Shoe Image */}
        <div className="h-[400px] w-[500px] ">
        <img
          src={selectedShoe}
          alt="Selected Shoe"
          className=" object-cover rounded-md transform transition-transform duration-700 rotate-[-15deg] hover:rotate-0 h-full w-full mt-[-50px] "
        />
        </div>
        {/* Thumbnail Images */}
        <div className="flex space-x-4 mt-6">
          {shoes.map((shoe) => (
            <img
              key={shoe.id}
              src={shoe.src}
              alt={shoe.alt}
              className={`w-20 h-20 cursor-pointer border rounded-md shadow-lg ${
                selectedShoe === shoe.src
                  ? "border-blue-500 ring-4 ring-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedShoe(shoe.src)}
              role="button"
              aria-label={`Select ${shoe.alt}`}
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-20">
        <h1 className="text-xl font-semibold text-gray-700">Men's Shoes</h1>
        <h1 className="text-6xl font-bold mb-6">NIKE AIR JORDAN 1 Mid.</h1>
        <span className="text-2xl font-bold">$60</span>
        <p className="text-gray-600 text-lg mb-8 py-3">
        
          
          The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.
        </p>
        <div className="flex space-x-6">
         
          <button
            className="bg-gray-300 font-bold px-6 py-3 rounded hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
            onClick={() => alert("Selected!")}
          >
         USD 85.5$
          </button>
          <button
            className="bg-black text-white px-6 py-3 rounded focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => alert("Added to cart!")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
