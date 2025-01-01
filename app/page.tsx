"use client";

import { cn } from "@/lib/utils";
import { Fingerprint, House } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="bg-zinc-800">
      <div className="flex h-screen ">
        <div className="w-20 bg-slate-900 h-full flex flex-col gap-5">
          <div className="w-12 mt-5 mx-auto rounded-full aspect-square border-2 bg-slate-700 text-white flex items-center justify-center">
            <Fingerprint />
          </div>
          Making some changes! 2
          <div className="flex flex-col items-center py-5">
            <div
              className={cn(
                "bg-slate-500 text-white rounded-full w-10 aspect-square flex items-center justify-center transition-all duration-200 cursor-pointer",
                "hover:scale-110"
              )}
            >
              <House size={18} />
            </div>
          </div>
        </div>

        <div className="w-60 bg-slate-900 pt-8">
          <p className="text-muted  ">Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
