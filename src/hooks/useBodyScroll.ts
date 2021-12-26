import { useState, useCallback } from 'react';

function useClickOutside() {
    const [bodyOverflow] = useState<string>(document.body.style.overflow);

    /**
     * Body scroll lock on mount
     * - set body overflow to hidden
     */
    const handleBodyLock = useCallback(() => {
        const bodyElement = document.body;

        if (bodyOverflow !== 'hidden') {
            bodyElement.style.overflow = 'hidden';
        }
    }, [bodyOverflow]);

    /**
 * Body scroll unlock on unmount
 * - check initial body overflow style
 * - if initial was 'hidden' leave it as that
 * - if initial was something different than 'hidden' and was set, set it to initial
 * - if initial was snot set, set it to 'visible' which is default overflow style
 */
    const handleBodyUnlock = useCallback(() => {
        const bodyElement = document.body;

        if (bodyElement.style.overflow === 'hidden' && bodyOverflow !== 'hidden') {
            if (bodyOverflow) {
                bodyElement.style.overflow = bodyOverflow;
            } else {
                bodyElement.style.removeProperty('overflow');
            }

            if (!bodyElement.getAttribute('style')) {
                bodyElement.removeAttribute('style');
            }
        }
    }, [bodyOverflow]);

    return {
        handleBodyLock,
        handleBodyUnlock,
    };
}

export default useClickOutside;
