import React, { useEffect } from 'react';

interface Props {
    action: () => void;
    ref: React.RefObject<HTMLElement | null>;
}

const useClickOutside = ({ ref, action }: Props) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && action) {
                action();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, action]);
};

export default useClickOutside;
