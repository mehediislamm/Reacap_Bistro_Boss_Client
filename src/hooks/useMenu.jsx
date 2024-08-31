import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useMenu = () => {
    
    const axiosPublic = useAxiosPublic();
 
    const { data: menu = [], isPending: loading, refetch, error } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu',);
            return res.data;
        },
    });

    
    return [menu, loading, refetch, error];


};

export default useMenu;