"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

const signUpSchema = z
  .object({
    firstName: z.string().min(2, "Họ phải có ít nhất 2 ký tự"),
    lastName: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {

  const router = useRouter()
  const { register } = useAuth()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    await register(values.email, values.password)
  }

  return (
    <Form {...form}>
      <div className="md:w-[400px] w-full max-md:h-screen max-md:flex max-md:flex-col max-md:items-center max-md:justify-center space-y-6 rounded-lg border bg-[#f5f3f0] p-6 shadow-lg md:mt-20">
        <form className="space-y-6 w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="text-center text-[#242e52] text-xl font-bold">Đăng ký</h2>

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Họ"
                    className="rounded-md border px-4 py-5 focus:outline-[#242e52] transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Tên"
                    className="rounded-md border px-4 py-5 focus:outline-[#242e52] transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="rounded-md border px-4 py-5 focus:outline-[#242e52] transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Mật khẩu"
                    className="rounded-md border px-4 py-5 focus:outline-[#242e52] transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    className="rounded-md border px-4 py-5 focus:outline-[#242e52] transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
            Đăng ký
          </Button>
        </form>

        <div className="flex items-center my-4 w-full">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 whitespace-nowrap"> Or </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mt-5 w-full">
          <Button variant="ghost" className="shadow-md w-full rounded-full border flex items-center justify-center gap-2">
            <FaGoogle size={20} />
            Sign up with Google
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Đã có tài khoản? <span className="text-[#242e52] font-semibold cursor-pointer" onClick={() => router.push('/sign-in')}>Đăng nhập</span>
          </p>
        </div>
      </div>
    </Form>
  );
}

