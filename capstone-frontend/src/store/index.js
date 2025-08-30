import { create } from 'zustand';
import { categorySlice } from './slices/categorySlice';
import { userSlice } from './slices/userSlice';
import { cartSlice } from './slices/cartSlice';

const useStore = create((...set) => ({
    ...categorySlice(...set),
    ...userSlice(...set),
    ...cartSlice(...set),
}));

export default useStore;
