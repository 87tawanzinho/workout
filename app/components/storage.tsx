"use client";

import { useEffect, useState } from "react";

export default function StorageName() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storageName = (): any => {
      if (typeof window !== "undefined" && window.localStorage) {
        // Check if localStorage is available
        return localStorage.getItem("username");
      }
      return null;
    };

    setUsername(storageName());
  }, []);
  return <p className="text-xl absolute end-0">Hi, {username} 💪🫡</p>;
}
