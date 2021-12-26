import styled from 'styled-components';

// Components
import { ButtonUi } from '../button/button.ui';

// Types
import {
    ModalBackdropProps,
    ModalContainerProps,
} from './modal.d';

export const ModalBackdropUi = styled.div<ModalBackdropProps>`
    background-color:  ${({ $show }) => ($show
        ? 'rgba(0,0,0, 0.5)'
        : 'transparent')};
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: ${({ $transitionTime }) => `background-color ${$transitionTime}ms ease`};
    z-index: 50;
`;

export const ModalContainerUi = styled.div<ModalContainerProps>`
    left: 50%;
    overflow-y: auto;
    position: absolute;
    top: ${({ $show }) => ($show ? '50%' : '-50%')};
    transform: translateX(-50%) translateY(-50%);
    transition: ${({ $transitionTime }) => `top ${$transitionTime}ms ease`};
`;

export const ModalContentUi = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #888888;
    width: 100%;
    max-width: 500px;
`;

export const ModalContentHeaderUi = styled.div`
    align-items: flex-start;
    border-bottom: 1px solid #EBEBED;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const ModalContentHeaderTextUi = styled.span`
    flex: 1;
    font-size: 1.125rem;
    font-weight: 500;
`;

export const ModalContentHeaderCloseUi = styled.span`
    cursor: pointer;
    flex: 0 0 auto;
`;

export const ModalContentBodyUi = styled.div`
    padding: 20px;
`;

export const ModalContentFooterUi = styled.div`
    border-top: 1px solid #EBEBED;
    padding: 20px;
    text-align: right;

    ${ButtonUi}:not(:first-child) {
        margin-left: 10px;
    }
`;
