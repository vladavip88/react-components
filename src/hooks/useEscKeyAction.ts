import { useEffect } from 'react';

interface Props {
    action: () => void;
}

const useEscKeyAction = ({ action }: Props) => {
    useEffect(() => {
        const executeActionOnEscKeydown = (event: any) => {
            if (event.keyCode === 27 && action && typeof action === 'function') {
                action();
            }
        };

        document.addEventListener('keydown', executeActionOnEscKeydown);

        return () => {
            document.removeEventListener('keydown', executeActionOnEscKeydown);
        };
    }, [action]);
};

export default useEscKeyAction;
