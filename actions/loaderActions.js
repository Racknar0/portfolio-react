import { START_LOADER, STOP_LOADER } from '@/types/loaderActions';

export const startLoader = () => {
    return { type: START_LOADER };
};

export const stopLoader = () => {
    return { type: STOP_LOADER };
};
