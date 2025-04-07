"use client";

import { Separator } from "@radix-ui/react-separator";
// import Image from "next/image";

const newsList = [
  {
    id: 1,
    title: "Featured on CNN!",
    image:
      "https://pizza4ps.com/wp-content/uploads/2025/02/IMG_0361-scaled.jpg",
    date: "2025.2.18",
  },
  {
    id: 2,
    title: "Pizza 4P’s Expansion Plans",
    image: "/images/1.jpg",
    date: "2025.2.10",
  },
  {
    id: 3,
    title: "New Vegan Menu Release",
    image: "/images/1.jpg",
    date: "2025.1.28",
  },
];

const truncateTitle = (title: string, maxLength = 40) => {
  return title.length > maxLength
    ? title.substring(0, maxLength) + "..."
    : title;
};

const NewsHome = () => {
  return (
    <div className="w-full py-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center my-8 md:my-12">
        News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news, index) => (
          <div
            key={news.id}
            className="flex flex-col md:flex-row gap-4 pb-4 group cursor-pointer"
          >
            {/* Ảnh tin tức */}
            <div className="w-28 h-28 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden mx-auto md:mx-0">
              <img
                src={news.image || ""}
                alt={news.title}
                className="w-28 h-28 object-cover transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>

            {/* Nội dung tin tức */}
            <div className="flex flex-col text-center md:text-left">
              <span className="text-sm font-bold">{news.date}</span>
              <h3 className="text-lg font-medium mt-1">
                {truncateTitle(news.title)}
              </h3>
            </div>

            {/* Separator (chỉ hiện trên tablet và desktop) */}
            {index < newsList.length - 1 && (
              <Separator className="hidden md:block my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
