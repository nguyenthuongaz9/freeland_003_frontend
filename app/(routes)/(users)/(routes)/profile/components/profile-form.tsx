"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileFormSchema = z.object({
    firstName: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    lastName: z.string().min(2, "Họ phải có ít nhất 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^\d{10,11}$/, "Số điện thoại phải có 10-11 chữ số"),
    birthDay: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Ngày sinh phải theo định dạng YYYY-MM-DD"),
    street: z.string().min(5, "Tên đường phải có ít nhất 5 ký tự"),
    district: z.string().min(2, "Quận/Huyện phải có ít nhất 2 ký tự"),
    city: z.string().min(2, "Thành phố phải có ít nhất 2 ký tự"),
});

const ProfileForm = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "Nguyen",
        lastName: "Van Thuong",
        email: "user@example.com",
        phone: "0123456789",
        birthDay: "2000-01-01",
        street: "123 Nguyễn Trãi",
        district: "Quận 1",
        city: "Hồ Chí Minh",
    });

    const form = useForm<z.infer<typeof profileFormSchema>>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: userData,
    });

    const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
        console.log("Updated Data:", values);
        setUserData(values);
        setIsEditing(false);
    };

    return (
        <div className="p-4 border rounded-md w-full max-w-lg mx-auto bg-white shadow-md">
            {isEditing ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">Tên</Label>
                                <Input id="firstName" {...form.register("firstName")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.firstName?.message}</p>
                            </div>
                            <div>
                                <Label htmlFor="lastName">Họ</Label>
                                <Input id="lastName" {...form.register("lastName")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.lastName?.message}</p>
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" {...form.register("email")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.email?.message}</p>
                            </div>
                            <div>
                                <Label htmlFor="phone">Số điện thoại</Label>
                                <Input id="phone" {...form.register("phone")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.phone?.message}</p>
                            </div>

                            {/* Ngày sinh */}
                            <div className="col-span-2">
                                <Label htmlFor="birthDay">Ngày sinh</Label>
                                <Input id="birthDay" {...form.register("birthDay")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.birthDay?.message}</p>
                            </div>

                            {/* Địa chỉ */}
                            <div className="col-span-2">
                                <h3 className="font-semibold text-lg mt-2">Địa chỉ</h3>
                            </div>
                            <div>
                                <Label htmlFor="street">Tên đường</Label>
                                <Input id="street" {...form.register("street")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.street?.message}</p>
                            </div>
                            <div>
                                <Label htmlFor="district">Quận/Huyện</Label>
                                <Input id="district" {...form.register("district")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.district?.message}</p>
                            </div>
                            <div className="col-span-2">
                                <Label htmlFor="city">Thành phố</Label>
                                <Input id="city" {...form.register("city")} className="bg-white border border-gray-300" />
                                <p className="text-red-500 text-sm">{form.formState.errors.city?.message}</p>
                            </div>
                        </div>

                        <div className="flex justify-between gap-4">
                            <Button type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
                                Lưu
                            </Button>
                            <Button type="button" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90" onClick={() => setIsEditing(false)}>
                                Hủy
                            </Button>
                        </div>
                    </form>
                </Form>
            ) : (
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Tên</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.firstName}</p>
                        </div>
                        <div>
                            <Label>Họ</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.lastName}</p>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.email}</p>
                        </div>
                        <div>
                            <Label>Số điện thoại</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.phone}</p>
                        </div>
                        <div className="col-span-2">
                            <Label>Ngày sinh</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.birthDay}</p>
                        </div>
                        <div className="col-span-2">
                            <h3 className="font-semibold text-lg mt-2">Địa chỉ</h3>
                        </div>
                        <div>
                            <Label>Tên đường</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.street}</p>
                        </div>
                        <div>
                            <Label>Quận/Huyện</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.district}</p>
                        </div>
                        <div className="col-span-2">
                            <Label>Thành phố</Label>
                            <p className="border p-2 rounded-md bg-[#E7E5E0]">{userData.city}</p>
                        </div>
                    </div>

                    <Button onClick={() => setIsEditing(true)} className="mt-4 w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
                        Sửa
                    </Button>

                </div>
            )}
        </div>
    );
};

export default ProfileForm;
