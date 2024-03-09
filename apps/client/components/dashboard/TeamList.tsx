import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const textFont = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

const TeamList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
      <section className="container mt-10">
        <Link href="/dashboard/team/1/kanban">
          <div className="max-w-[15rem] min-w-[10rem] bg-gray-50 hover:bg-gray-200 transition-all shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-gray-500 h-24">
              <h2 className="text-white text-4xl font-semibold">DT</h2>
            </div>
            <div className="p-4 flex justify-center items-center">
              <h2 className={cn("text-xl mb-2", textFont.className)}>
                Design Team
              </h2>
            </div>
          </div>
        </Link>
      </section>
      <section className="container mt-10">
        <Link href="/dashboard/team/1/kanban">
          <div className="max-w-[15rem] min-w-[10rem] bg-gray-50 hover:bg-gray-200 transition-all shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-gray-500 h-24">
              <h2 className="text-white text-4xl font-semibold">DT</h2>
            </div>
            <div className="p-4 flex justify-center items-center">
              <h2 className={cn("text-xl mb-2", textFont.className)}>
                Development Team
              </h2>
            </div>
          </div>
        </Link>
      </section>
      <section className="container mt-10">
        <Link href="/dashboard/team/1/kanban">
          <div className="max-w-[15rem] min-w-[10rem] bg-gray-50 hover:bg-gray-200 transition-all shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-gray-500 h-24">
              <h2 className="text-white text-4xl font-semibold">MT</h2>
            </div>
            <div className="p-4 flex justify-center items-center">
              <h2 className={cn("text-xl mb-2", textFont.className)}>
                Marketing Team
              </h2>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default TeamList;
