// import Image from 'next/image'

interface ReviewItemProps {
    content: string;
    fullname: string;
    rating: number;
    createdAt: Date;
}

const ReviewItem = ({
    content,
    fullname,
    rating,
    createdAt
}: ReviewItemProps) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                <h3 className="text-sm font-medium text-gray-900">
                    {new Date(createdAt).toLocaleDateString("vi-VN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </h3>
                <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>{content}</p>
                </div>
            </div>

            <div className="order-1 flex items-center sm:flex-col sm:items-start">
                <img 
                    src="https://cdn-icons-png.flaticon.com/256/3177/3177440.png"
                    alt="Mark Edwards"
                    className="h-12 w-12 rounded-full aspect-square"
                    width={48} // width in pixels
                    height={48} // height in pixels
                />

                <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">{fullname}</p>
                    <div className="mt-2 flex items-center">
                        {Array.from({ length: rating }, (_, index) => index).map((index) => (
                            <svg
                                key={index}
                                className="text-yellow-500 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem
