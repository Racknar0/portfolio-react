import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preload from '@/components/preload/preload';
import Main from '@/components/main/main';
import { stopLoader } from '@/actions/loaderActions';

export default function Home() {
    const { preload } = useSelector((state) => state.loader);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(stopLoader());
        }, 4400);
    }, []);

    
    return (
        <>
            {preload ? (
                <Preload />
            ) : (
                <Main />
                )}
        </>
        // <>
        //     <Main />
        // </>
    );
}
