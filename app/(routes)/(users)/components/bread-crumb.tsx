"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <nav className="text-sm font-medium text-gray-500 dark:text-gray-400">
            <ol className="flex space-x-2">
                <li>
                    <Link href="/products" className="text-blue-600 hover:underline">
                        Sản phẩm
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={routeTo} className="flex items-center">
                            <span className="mx-2">›</span>
                            {isLast ? (
                                <span className="text-gray-900 dark:text-white">{decodeURIComponent(name)}</span>
                            ) : (
                                <Link href={routeTo} className="text-blue-600 hover:underline">
                                    {decodeURIComponent(name)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
