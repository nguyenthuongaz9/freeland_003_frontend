// import Image from "next/image";

const posts = [
  {
    id: 1,
    image: "/images/1.jpg",
  },
  {
    id: 2,
    image: "/images/1.jpg",
  },
  {
    id: 3,
    image: "/images/1.jpg",
  },
  {
    id: 4,
    image: "/images/1.jpg",
  },
  {
    id: 5,
    image: "/images/1.jpg",
  },
  {
    id: 6,
    image: "/images/1.jpg",
  },
  {
    id: 7,
    image: "/images/1.jpg",
  },
  {
    id: 8,
    image: "/images/1.jpg",
  },
  {
    id: 9,
    image: "/images/1.jpg",
  },
];

type Post = {
  id: number;
  image: string;
};

const InstagramPost = ({ post }: { post: Post }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={post.image || ""}
        alt="Instagram post"
        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all"></div>
    </div>
  );
};

const LinkSocialMedia = () => {
  return (
    <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
      <div className="lg:col-span-7">
        <h2 className="text-2xl font-bold text-center mb-6">
          Follow Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* YouTube Section */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold text-center mb-6">Follow Youtube</h2>
        <div className="grid grid-cols-1 gap-4">
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="w-full">
              <InstagramPost post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkSocialMedia;
