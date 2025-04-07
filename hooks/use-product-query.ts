import { hostname } from "@/constants/hostname";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import queryString from "query-string";

interface useProductQueryProps {
  page: number;
  sort: string;
  filters: Record<string, any>;
  search?: string;
}

export const useProductQuery = ({ page, sort, filters, search }: useProductQueryProps) => {
  const fetchProducts = async () => {
    const cleanedFilters = Object.fromEntries(
      Object.entries({ pageNumber: page, sort: sort || "id,desc", ...filters }).filter(
        ([, value]) => value !== null && value !== undefined && value !== ""
      )
    );


    const query = queryString.stringify(cleanedFilters);

    const response = await axios.get(
      `${hostname}/products/public?${query}`,
      {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      }

    );

    console.log("Query:", query);
    console.log("Response Data:", response.data);
    console.log(`${hostname}/products/public?${query}`)

    return response.data.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["products", { page, filters, sort }],
    queryFn: fetchProducts,
  });

  return {
    products: data?.content || [],
    totalPages: data?.totalPages || 0,
    isFetching
  };
};
