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

const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function SignInPage() {

  const { signIn } = useAuth()
  const router = useRouter()
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      await signIn(values.email, values.password)
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>

      <div className="md:w-[400px] w-full max-md:h-screen max-md:flex max-md:flex-col max-md:items-center max-md:justify-center space-y-6 rounded-lg border bg-[#f5f3f0] p-6 shadow-lg md:mt-40 md:mb-20">
        <form className="space-y-6 w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="text-center text-[#242e52] text-xl font-bold">Đăng nhập</h2>

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

          <Button type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
            Đăng nhập
          </Button>
        </form>

        <div className="flex items-center my-4 w-full">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 whitespace-nowrap">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mt-5 w-full">
          <Button variant="ghost" className="shadow-md w-full border rounded-fulll flex items-center justify-center gap-2">
            <FaGoogle size={20} />
            Sign in with Google
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Did not have an account? <span className="text-[#242e52] font-semibold cursor-pointer" onClick={() => router.push('/register')}>Create an account</span>
          </p>
        </div>
      </div>
    </Form>
  );
}

