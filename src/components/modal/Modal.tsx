import React, {
    useState, useEffect, ReactNode, useRef,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';

// Interface
import { ModalProps, ModalHeaderProps, ModalFooterProps } from './modal.d';

// Hooks
import { useClickOutside, useEscKeyAction, useBodyScroll } from '../../hooks';

// Components
import Button from '../button';
import Icon from '../icon';

// Ui
import {
    ModalBackdropUi,
    ModalContainerUi,
    ModalContentUi,
    ModalContentHeaderUi,
    ModalContentHeaderTextUi,
    ModalContentHeaderCloseUi,
    ModalContentBodyUi,
    ModalContentFooterUi,
} from './modal.ui';

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose = () => {} }) => (
    <ModalContentHeaderUi>
        <ModalContentHeaderTextUi>
            {children}
        </ModalContentHeaderTextUi>
        <ModalContentHeaderCloseUi>
            <Icon
                name="Close"
                onClick={onClose}
            />
        </ModalContentHeaderCloseUi>
    </ModalContentHeaderUi>
);

const ModalFooter: React.FC<ModalFooterProps> = ({
    children,
    onClose = () => {},
    onConfirm = () => {},
}) => (
    <ModalContentFooterUi>
        {children || (
            <>
                <Button
                    link
                    onClick={onClose}
                >
                    Close
                </Button>
                <Button onClick={onConfirm}>Confirm</Button>
            </>
        )}
    </ModalContentFooterUi>
);

const Modal: React.FC<ModalProps> & {
    Content: React.FC;
    Header: React.FC<ModalHeaderProps>;
    Body: React.FC;
    Footer: React.FC<ModalFooterProps>;
} = ({
    children,
    closeOnClickOutside = true,
    closeOnEsc = true,
    show = false,
    transitionTime = 300,
    onClose,
}) => {
    const modalContentRef = useRef(null);
    const [shouldRenderDelay, setShouldRenderDelay] = useState<boolean>(show);
    const [shouldRender, setShouldRender] = useState<boolean>(show);
    const [memorizedChildren, setMemorizedChildren] = useState<ReactNode | undefined>(null);
    const { handleBodyLock, handleBodyUnlock } = useBodyScroll();

    useEffect(() => {
        if (!show) {
            // Before Unmount
            setShouldRenderDelay(false);
            setMemorizedChildren(children);
            setTimeout(() => {
                // After Unmount
                handleBodyUnlock();
                setShouldRender(false);
                setMemorizedChildren(null);
            }, transitionTime);
        } else {
            // Before Mount
            setShouldRender(true);
            setTimeout(() => {
                // After mount
                handleBodyLock();
                setShouldRenderDelay(true);
            }, 10);
        }
    }, [show]);

    // Enable close modal on backdrop click
    useClickOutside({
        action: () => closeOnClickOutside && onClose(),
        ref: modalContentRef,
    });

    // Enable close modal on esc button
    useEscKeyAction({
        action: () => closeOnEsc && onClose(),
    });

    if (!shouldRender) return null;

    return ReactDOM.createPortal(
        <ModalBackdropUi
            $show={shouldRenderDelay}
            $transitionTime={transitionTime}
        >
            <ModalContainerUi
                $show={shouldRenderDelay}
                $transitionTime={transitionTime}
                ref={modalContentRef}
            >
                {!show ? memorizedChildren : children}
            </ModalContainerUi>
        </ModalBackdropUi>,
        document.getElementById('root') as HTMLElement,
    );
};

Modal.Content = ModalContentUi;
Modal.Content.displayName = 'Modal.Content';
Modal.Header = ModalHeader;
Modal.Header.displayName = 'Modal.Header';
Modal.Body = ModalContentBodyUi;
Modal.Body.displayName = 'Modal.Body';
Modal.Footer = ModalFooter;
Modal.Footer.displayName = 'Modal.Footer';

export default Modal;
