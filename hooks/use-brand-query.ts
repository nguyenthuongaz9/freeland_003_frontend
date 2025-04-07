import { hostname } from '@/constants/hostname';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useBrandQuery = () => {
  return useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await axios.get(`${hostname}/brands/no-paging`,{
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      return response.data.data;
    },
  });
};
