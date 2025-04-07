import { useCartStore } from './use-cart-store';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { hostname } from '@/constants/hostname';


const addToCartApi = async (item: any) => {
    const response = await axios.post(`${hostname}/cart-item`,
        {
            accountId: localStorage.getItem("accountId"),
            ...item
        },
        {
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        }
    );
    return response.data.data;
};

const removeFromCartApi = async (id: string) => {
    const response = await axios.delete(`${hostname}/cart-item/${id}`);
    return response.data.data;
};

const updateCartApi = async (data: any) => {
    const response = await axios.patch(`${hostname}/cart-item`, { data });
    return response.data.data;
};

export const useCartQuery = () => {
    const { cart, addToCart, removeFromCart, setCart } = useCartStore();
    const queryClient = useQueryClient();

    const { mutate: addItem } = useMutation({
        mutationFn: addToCartApi,
        onSuccess: (item: any) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success("Thêm vào giỏ hàng thành công");
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.detailMessage ||
                error.response?.data?.message ||
                "Có lỗi xảy ra, vui lòng thử lại.";
            toast.error(errorMessage);
        }
    });


    const { mutate: removeItem } = useMutation({
        mutationFn: removeFromCartApi,
        onSuccess: (id: string) => {
            removeFromCart(id);
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });

    const { mutate: updateItem } = useMutation({
        mutationFn: updateCartApi,
        onSuccess: (item: any) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    })



    return {
        cart,
        addItem,
        removeItem,
        updateItem
    };
};