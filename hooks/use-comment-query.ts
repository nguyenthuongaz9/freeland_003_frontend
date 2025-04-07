import { hostname } from "@/constants/hostname";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



interface useCommentQueryProps {
    productId: string;
}


export const useCommentQuery = ({
    productId
}: useCommentQueryProps) => {
    const fetchComments = async () => {
        const response = await axios.get(`${hostname}/comments/product/${productId}`, {   headers: {
            'ngrok-skip-browser-warning': 'true'
          }});
        console.log(response.data)
        return response.data.data;
    }

    const { data } = useQuery({
        queryKey: ["comments"],
        queryFn: () => fetchComments(),
    })

   

    return {
        data: data ? data : null,
    }

}