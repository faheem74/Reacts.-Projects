import { useState } from 'react';

const App = () => {
  // Data for small images
  const smallImages = [
    'https://s3-alpha-sig.figma.com/img/576d/7b1c/012eb7817c9bfaffb5145f6106e2b0e1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1MLac5dMu8AJbJT~UC~L7qIol6Y4ZeLnkXAaymZzzqxGd6g8rgzE5z1iF7i1iN4X9wQZeJZ7qWidvtfPRMfc-0gnOo-v1~k36bXsp-l1MdfaKhM-YxR3auJOA76bQglKtHyg29TtFtnJL1OvRw9B4ONI8Zl10FTOYsqE-ZzadWlncGLDCjGRBuR8eqKYnKJJ7ZDRSlJtUGkKYButJOfP7UGoLg4fz4dCrWIV8PtOn8GrwWmzrhQG3~uNMbKCP7RgmNh34KrkODq53kxcsI3bKSy3Gk6RtmTP0vDfsrJ1f1cAsqntYSJT-7Dcero4AKZEkAIgx93XEiwkUHOKBteJA__',
    'https://s3-alpha-sig.figma.com/img/0955/bf86/2d7834e8dcbca41239e98f752ab21cd9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nggZ-zu1A-k4rqHGKbNwlgnbOvOv2d79UvrRyF2WMJpN~Jssy38q3cVGzbA7ogHubiO-J2J1S~7bCgw2vAJuLgyZeAlzviOPCjNTI9O75nJVIqPQK025IQMOOqz1c4kiSkqSqHd8uLpKVQAnj~FyqmZIWo2B5QXY7lISPuGUrtjsAAvVqlTct74AMI7M6RsK9XUoPfz8VR066-adRiR6rPjSwV4jKpciKhbYskyl0Ff~W8g6qhUxwQgtZiIrqfiXZRNHywhPPnCgSFLjvR9QTUTNR6qwn6OhEGSoHzR-4LM-jXGgeNhsENRB7cZfte--lRqYmYtvFcM1322Ak20omw__',
    'https://s3-alpha-sig.figma.com/img/59bf/b5be/ad875e8b28fd90d29223ae2ccc52293e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBEQUVtIuPlLSo~7uAQcE~CvYGIWT6FexmI1uZB2NlBShG2AdJ9GReO4rS7iUS0FqMUMTHfksvsC4DVzET1uawcRPcuj69AryF~AFBbxBwdTX9ME-hhwI-5F065zmCd3zeyeTVdYTPycW7Y0B2NWW20Ej9ywxZqT-H633GuzFEjq32BFKkHGT0odJuFxvvDmy2TlZrbjIXLu4UTANM3nPszHOF2hE89MlXL7cfMtyYoX4BOzCAAOl9j8f6OZnadTCGyy6j5lmpMEgO1gKWk3sfA9a0RLT7r8XXo6pcYYOPDBX827mIxDEU7oDJOkHC06KbBEOiIjrfklC4omTjPsXA__',
  ];
  

  // Initial state for six cards
  const [cards, setCards] = useState([
    { id: 1, image: smallImages[0],  },
    { id: 2, image: smallImages[1], },
    { id: 3, image: smallImages[2],  },
    { id: 4, image: smallImages[0], },
    { id: 5, image: smallImages[1],  },
    { id: 6, image: smallImages[2], },
  ]);

  // Function to update a card's data
  const updateCard = (cardId, newImage) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, image: newImage } : card
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">New This Week</h1>

      {/* Paragraph */}
      <p className="text-lg text-center mb-8">Featuring The New Arrival.</p>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-96 mx-auto h-90">
            <img src={card.image} alt={`Card ${card.id}`} className="w-full h-52 object-cover" />
            <div className="p-4">
              
              <div className="flex justify-center gap-2 p-2">
                {smallImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Option ${index + 1}`}
                    className="w-12 h-12 object-cover cursor-pointer border border-gray-300 rounded-md"
                    onClick={() => updateCard(card.id, image)}
                  />
                  
                ))}
                
              </div>
              <div className="text-center mb-2">
                <h2 className="text-xl font-semibold">Nike AL8</h2>
                <p className="text-sm text-gray-600">MEN’s Shoes</p>
                <p>$90</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
