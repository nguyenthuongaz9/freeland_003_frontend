"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { CircleUser, ChevronDown, User, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/hooks/use-auth-store"

export const UserDropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { profile , logout } = useAuthStore()

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 relative">
          {profile ? profile.fullname : <CircleUser size={35} className="font-semibold" />}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={open ? { rotate: 180, opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute right-[-25px]"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom">
        <DropdownMenuLabel>Chào mừng đến với ...</DropdownMenuLabel>

        {profile ?
          <div className="flex items-center ">
            <button onClick={logout} className="px-4 py-2 w-full bg-[#bf6b21] text-white text-wrap rounded-md">
              Đăng xuất
            </button>
          
          </div>
          :
          <div className="flex items-center gap-2 p-2">
            <button onClick={() => router.push('/register')} className="px-4 py-2 bg-[#bf6b21] text-white text-wrap rounded-md">
              Đăng ký
            </button>
            <button onClick={() => router.push('/sign-in')} className="px-4 py-2 text-[#bf6b21] bg-[#ded7c5] text-wrap rounded-md">
              Đăng nhập
            </button>

          </div>
        }

        <div className="flex flex-col items-center space-y-2 mt-4">
          <button onClick={() => router.push('/profile')} className=" font-semibold flex items-center justify-start w-full gap-2 hover:bg-[#ccc5b4] transition box-border p-2 rounded-md" >
            <User />
            Thông tin cá nhân
          </button>
          <button onClick={() => router.push('/purchase')} className=" font-semibold flex items-center justify-start w-full gap-2 hover:bg-[#ccc5b4] transition box-border p-2 rounded-md">
            <ShoppingBag />
            Thông tin đơn hàng
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

