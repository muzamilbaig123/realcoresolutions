"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[560px] p-12 border rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="text-8xl"> 404 </span> <br /> Not Found
        </h1>

        <p className="text-lg text-gray-600 text-center">
          Oops! The page you are looking for does not exist <br /> or has been
          moved.
        </p>

        <div className="text-center p-4 flex justify-center item-center gap-4">
          <Button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-lg px-6 py-5"
          >
            Go Home
          </Button>

          <Button
            onClick={() => router.back()}
            className="bg-gray-600 text-lg px-6 py-5"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}