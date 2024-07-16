import React from "react";

function PreloadImages () {
    React.useEffect(() => {
        // Dynamically import all images in the folder
        const images = import.meta.glob('/assets/characteremotes/*.{png,jpg,jpeg,svg,webp,gif}');
        let imagesLoaded = 0;
        const totalImages = Object.keys(images).length;
        // Preload each image
        for (const path in images) {
            images[path]().then((module) => {
            const img = new Image();
            img.src = module.default;
            img.onload = () => {
                imagesLoaded += 1;
                if (imagesLoaded === totalImages) {
                  console.log(`All ${totalImages} images preloaded.`);
                }
                else{
                    console.log(`PreloadImages completed, ${imagesLoaded} images preloaded out of ${totalImages}.`)
                }
              };
            });
        }
        
        }, []);

    return null;
};

export default PreloadImages