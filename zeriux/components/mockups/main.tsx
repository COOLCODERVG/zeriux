"use client";

import { useTheme } from "next-themes";

export default function MainMockup() {
  const { resolvedTheme } = useTheme();
  let placeholderText = "Demo Video Placeholder";

  return (
    <div
      className="w-[1248px] h-[765px] flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
    >
      {placeholderText}
    </div>
  );
}
