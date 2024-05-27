import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platformsLogo } from '../data';


// Functional component to add platforms
function AddPlatform(props) {
  // State to keep track of clicked images
  const [imageClicked, setImageClicked] = useState([]);

  // Function to close the modal
  const closeModal = () => {
    props.setShowModal(false);
  };

  // Function to handle image click event
  const handleClick = (e) => {
    const newPlatformSrc = e.target.src.match(props.regex)[1]; // Extracting platform src using regex
    const newPlatformName = e.target.alt; // Getting platform name from alt attribute
    // Check if the image is already clicked
    if (!imageClicked.some(image => image.src === newPlatformSrc)) {
      // Add new image to clicked list
      setImageClicked([...imageClicked, { src: newPlatformSrc, name: newPlatformName }]);
    } else {
      // Remove image from clicked list
      setImageClicked(imageClicked.filter(image => image.src !== newPlatformSrc));
    }
  };

  // Function to add new platforms
  const addNewPlatforms = () => {
    props.handleImageClicked(imageClicked); // Call the parent function to handle the addition of new platforms
  };

  // Mapping over platformsLogo to create image elements
  const imgs = platformsLogo.map((logo, index) => {
    const isClicked = imageClicked.some(image => image.src === logo.src); // Check if image is clicked
    return (
      <img
        key={index}
        src={`/logo-platform/${logo.src}`}
        className={`size-20 m-4 rounded transition duration-200 ease-in-out transform hover:scale-110 hover:cursor-pointer ${isClicked ? "border-white border-2" : ''}`}
        alt={logo.name}
        onClick={(e) => handleClick(e)}
      />
    );
  });

  return (
    <div
      className="z-10 fixed inset-0 flex items-center justify-center mt-20"
      onClick={closeModal} // Close modal on clicking outside
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()} // Prevent closing modal on clicking inside
          className="w-[550px] h-[450px] dark absolute"
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" alt="Logo" />
          <CardHeader>
            <CardTitle className="text-center -mt-10">
              Add platform
            </CardTitle >
            <CardTitle className="text-center text-sm">Which platform(s) would you like to add?</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-row flex-wrap justify-center m-6 mt-4 rounded">
            {imgs} {/* Render the images */}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button 
              variant="gradientPurple" 
              onClick={addNewPlatforms} // Add new platforms on button click
            >
              Add
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AddPlatform;