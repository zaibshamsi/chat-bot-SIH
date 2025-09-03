'use client'; // This directive is essential for client-side hooks in Next.js

import React, { useEffect, useRef } from 'react';

// --- Start of Fix for 'no-explicit-any' ---
// We define specific types for the Voiceflow configuration object.
// This is the correct way to handle complex objects in TypeScript and avoids the 'any' type.

interface VoiceflowRenderConfig {
  mode: 'embedded';
  target: HTMLDivElement | null;
}

interface VoiceflowVoiceConfig {
    url: string;
}

interface VoiceflowConfig {
  verify: { projectID: string };
  url: string;
  versionID: string;
  voice?: VoiceflowVoiceConfig;
  render: VoiceflowRenderConfig;
}

// We declare the structure of the 'voiceflow' object on the global 'window'
// This tells TypeScript what 'window.voiceflow' looks like and replaces the need for 'any'.
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: VoiceflowConfig) => void;
      };
    };
  }
}
// --- End of Fix ---

const VoiceflowWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    
    script.onload = () => {
      // Check if the voiceflow object is available before using it
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '68b86882d8cca212c2ec9988' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          render: {
            mode: 'embedded',
            target: containerRef.current,
          },
        });
      }
    };
    
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ height: '100%', width: '100%' }} />;
};

export default VoiceflowWidget;

