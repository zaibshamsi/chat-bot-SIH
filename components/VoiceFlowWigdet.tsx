'use client'; // This directive is essential for client-side hooks in Next.js

import React, { useEffect, useRef } from 'react';

// Define the structure of the Voiceflow window object for TypeScript
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

const VoiceflowWidget = () => {
  // Create a ref to attach to the div where the widget will be rendered
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect runs once on the client-side after the component mounts
    
    // Create a script element
    const script = document.createElement('script');
    
    // Set the onload event handler for the script
    script.onload = () => {
      // Once the script is loaded, call the Voiceflow load function
      window.voiceflow.chat.load({
        verify: { projectID: '68b86882d8cca212c2ec9988' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        render: {
          mode: 'embedded',
          // Use the ref to target the specific div for embedding
          target: containerRef.current,
        },
      });
    };
    
    // Set the source and type for the script
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    
    // Append the script to the end of the body
    document.body.appendChild(script);

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // This div is the container where the Voiceflow widget will be embedded
  return <div ref={containerRef} style={{ height: '100%', width: '100%' }} />;
};

export default VoiceflowWidget;
