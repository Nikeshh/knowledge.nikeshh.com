'use client'

import React, { useEffect } from 'react'
import { toast } from "sonner"

export default function Home() {
  useEffect(() => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }, []);

  return (
    <div>
    </div>
  );
}
