import React from 'react';

interface DatePillProps {
  date: Date;
}

export function DatePill({ date }: DatePillProps) {
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:hidden z-50 
                   bg-white/80 dark:bg-black/50 text-gray-800 dark:text-gray-200 
                   rounded-full px-4 py-1 flex items-center justify-center text-xs 
                   backdrop-blur-sm shadow-sm">
      <span className="font-medium">{month}</span>
      <span className="mx-1">•</span>
      <span className="font-bold">{day}</span>
    </div>
  );
}
