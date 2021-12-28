import React, { useEffect } from 'react';

interface Props {
    action: () => void;
    ref: React.RefObject<HTMLElement | null>;
    shouldEnable?: boolean;
}

const useClickOutside = ({ ref, action, shouldEnable = true }: Props) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && action) {
                action();
            }
        };

        if (shouldEnable) {
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }

        return undefined;
    }, [ref, action]);
};

export default useClickOutside;
