import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // akhne nise j refetch ase ayta Food Card a use kra hoise 

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) return []; // Handle cases where email is not defined
            const res = await axiosSecure.get(`/carts?email=${user.email}`); // Removed extra space
            return res.data;
        },
        enabled: !!user?.email, // Optional: Only run query if user.email is defined
    });

    return [cart, refetch];
};

export default useCart;
