import {useEffect, useState} from "react";
// @ts-ignore
import debounce from 'lodash.debounce';

const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const debouncedResizeHandler = debounce(() => {
            setSize([window.innerWidth, window.innerHeight]);
        }, 1000);

        window.addEventListener('resize', debouncedResizeHandler);
        return () => {
            debouncedResizeHandler.cancel();
            window.removeEventListener('resize', debouncedResizeHandler);
        };
    }, []);
    return size;
};
export default useWindowSize;