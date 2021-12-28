import { useEffect } from 'react';

interface Props {
    action: () => void;
    shouldEnable?: boolean;
}

const useEscKeyAction = ({ action, shouldEnable }: Props) => {
    useEffect(() => {
        const executeActionOnEscKeydown = (event: any) => {
            if (event.keyCode === 27 && action && typeof action === 'function') {
                action();
            }
        };

        if (shouldEnable) {
            document.addEventListener('keydown', executeActionOnEscKeydown);

            return () => {
                document.removeEventListener('keydown', executeActionOnEscKeydown);
            };
        }

        return undefined;
    }, [action]);
};

export default useEscKeyAction;
