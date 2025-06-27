import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/authSlice';
import { USER_API_ENDPOINT } from '@/utils/data';

const useGetMe = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get(`${USER_API_ENDPOINT}/profile`, {
                    withCredentials: true,
                });
                if (res.data.success) {
                    dispatch(setUser(res.data.user));
                }
            } catch (error) {
                console.log(error);
                // Optional: dispatch an action to clear user data on error
                // dispatch(setUser(null));
            }
        };
        fetchUserProfile();
    }, [dispatch]);
};

export default useGetMe;