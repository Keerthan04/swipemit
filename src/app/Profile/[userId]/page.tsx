"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Shadcn Card
import { User, Eye, Heart } from "lucide-react"; // Lucide Icons
import Image from "next/image";
import clsx from "clsx";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  const [swipeData, setSwipeData] = useState([
    { id: 1, name: "Alice", image: "/profile1.jpg" },
    { id: 2, name: "Bob", image: "/profile2.jpg" },
    { id: 3, name: "Charlie", image: "/profile3.jpg" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(swipeData.length - 1);

  const handleSwipe = (direction: "left" | "right") => {
    if (currentIndex < 0) return;

    console.log(`${swipeData[currentIndex].name} swiped ${direction}`);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const offsetX = e.clientX - window.innerWidth / 2;
    const direction = offsetX < 0 ? "left" : "right";
    handleSwipe(direction);
  };

  return (
    <main className="h-screen w-full flex flex-col bg-white">
      {/* Upper Section */}
      <section className="flex-grow-0 flex-shrink-0 p-4 flex items-center justify-between bg-gray-50 border-b">
        <div className="flex flex-col items-center space-y-2">
          <Heart className="text-red-500" size={28} />
          <p className="text-sm font-medium">Likes</p>
          <p className="text-lg font-bold">120</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Eye className="text-blue-500" size={28} />
          <p className="text-sm font-medium">Views</p>
          <p className="text-lg font-bold">345</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <User className="text-green-500" size={28} />
          <p className="text-sm font-medium">Matches</p>
          <p className="text-lg font-bold">56</p>
        </div>
      </section>

      {/* Lower Section */}
      <section className="flex-grow flex items-center justify-center p-4 bg-gray-100">
        <div className="relative w-full max-w-xs h-[75%]">
          {swipeData.map((person, index) => (
            <div
              key={person.id}
              className={clsx(
                "absolute w-full h-full transition-transform duration-300",
                index === currentIndex ? "z-10" : "z-0"
              )}
              draggable={index === currentIndex}
              onDragEnd={index === currentIndex ? handleDragEnd : undefined}
              style={{
                transform:
                  index === currentIndex ? "translate(0, 0)" : "scale(0.9)",
              }}
            >
              <Card className="w-full h-full">
                <CardContent className="flex flex-col items-center">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                  <p className="text-xl font-bold mt-4">{person.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
