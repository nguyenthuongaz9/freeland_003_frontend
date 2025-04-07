const DeliveryDetail = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Chi tiết giao hàng</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tên của bạn</label>
                    <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Nguyễn Văn A" required />
                </div>

                <div>
                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email của bạn*</label>
                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@example.com" required />
                </div>

                <div>
                    <label htmlFor="street_district" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tên đường/Quận*</label>
                    <input type="text" id="street_district" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="123 Nguyễn Huệ, Quận 1" required />
                </div>

                <div>
                    <label htmlFor="select-city-input" className="block text-sm font-medium text-gray-900 dark:text-white">Thành phố*</label>
                    <select id="select-city-input" defaultValue="HCM" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        <option value="HCM">TP. Hồ Chí Minh</option>
                        <option value="HN">Hà Nội</option>
                        <option value="DN">Đà Nẵng</option>
                        <option value="CT">Cần Thơ</option>
                        <option value="HP">Hải Phòng</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Số điện thoại*</label>
                    <input type="text" id="phone-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="0912345678" required />
                </div>

                <div className="sm:col-span-2">
                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        Thêm địa chỉ mới
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetail;
