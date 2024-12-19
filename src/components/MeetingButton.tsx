"use client";

import { Button } from "./ui/button";
import { useState } from "react";

export default function MeetingButton({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className: string;
}) {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <>
      <Button
        id={id}
        onClick={() => setShowIframe(true)}
        className={className}
        size="lg"
      >
        {children}
      </Button>

      {showIframe && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-4xl h-[80vh] relative">
            <Button
              onClick={() => setShowIframe(false)}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300"
            >
              X
            </Button>
            <iframe
              src="https://cal.com/sherif-elamir/30min"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
}
