import React, { useEffect, useRef } from 'react';
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";


cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;


const ImageDisplay = ({filename}) => {
    
    const divRef = useRef();
    
    useEffect(() => {

        const element = divRef.current;
        cornerstone.enable(element);
        cornerstone
          .loadImage(
            `wadouri:https://storagemedimages.s3.eu-west-3.amazonaws.com/${filename}`
          )
          .then(image => {

            const viewport = {
              invert: false,
              pixelReplication: false,
              voi: {
                windowWidth: 400,
                windowCenter: 200
              },
              scale: 1,
              translation: {
                x: 0,
                y: 0
              }
            };
    
            cornerstone.displayImage(element, image, viewport);
          });

    }, [divRef, filename])

    return (
          <div ref={divRef}></div>
    )
}

export default ImageDisplay;