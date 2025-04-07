"use client"

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { useEffect, useState } from "react"

const slides = ["images/1.jpg", "images/2.jpg", "images/3.jpg"]

export function HomeCarousel() {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!api) return

        const updateIndex = () => {
            setCurrentIndex(api.selectedScrollSnap())
        }

        api.on("select", updateIndex)
        updateIndex()

        return () => {
            api.off("select", updateIndex)
        }
    }, [api])

    return (
        <div className="relative w-full">
            <Carousel setApi={setApi} className="relative w-full shadow-md overflow-hidden rounded-xl">
                <CarouselContent>
                    {slides.map((image, index) => (
                        <CarouselItem key={index} className="w-full overflow-hidden ">
                            <div className="w-full h-[30vh] md:h-[55vh] overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    // layout="fill" // Ensures the image covers the div and scales responsively
                                    // objectFit="cover" // Keeps the image's aspect ratio
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75" />

                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75" />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === index ? "bg-white scale-125" : "bg-transparent border"
                            }`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    )
}
