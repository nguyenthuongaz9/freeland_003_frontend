import { hostname } from '@/constants/hostname';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const response = await axios.get(`${hostname}/categories/no-paging`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      return response.data.data;
    },
  });
};