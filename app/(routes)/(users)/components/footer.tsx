import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#f5f3f0] text-gray-700 text-sm py-10 mt-5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Về chúng tôi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hỗ trợ</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Kết nối</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Gửi Email để liên hệ</h3>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:contact@project-freeland.com"
                className="block bg-[#242e52] text-white text-center py-2 rounded-lg hover:bg-[#2b3763] transition"
              >
                Gửi Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-center">
          <p>&copy; 2024 project-freeland-003. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

