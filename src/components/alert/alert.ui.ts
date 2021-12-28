import styled, { css } from 'styled-components';

// Ui
import { IconUi } from '../icon/icon.ui';

// Interfaces
import {
    AlertUiProps,
    AlertContentWrapperUiProps,
    AlertTextUiProps,
    AlertTitleUiProps,
    AlertIconUiProps,
} from './alert.d';

// eslint-disable-next-line import/prefer-default-export
export const AlertUi = styled.div<AlertUiProps>`
    align-items: stretch;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.alert.borderRadius};
    border: 1px solid transparent;
    display: flex;
    font-size: ${({ theme }) => theme.alert.fontSize};
    justify-content: space-between;
    line-height: 1.125rem;
    padding: 12px 16px;
    
    ${({ theme, $type, $solid }) => css`
        background-color: ${theme.alert[$type][`backgroundColor${$solid ? 'Solid' : ''}`]};
        border-color: ${theme.alert[$type][`color${$solid ? 'Solid' : ''}`]};
    `};

    
`;

export const AlertContentWrapperUi = styled.div<AlertContentWrapperUiProps>``;

export const AlertTitleUi = styled.div<AlertTitleUiProps>`
    color: ${({ theme, $type, $solid }) => theme.alert[$type][`color${$solid ? 'Solid' : ''}`]};
    font-size: ${({ theme }) => theme.alert.title.fontSize};
    font-weight: ${({ theme }) => theme.alert.title.fontWeight};
    margin-bottom: 8px;
`;

export const AlertTextUi = styled.div<AlertTextUiProps>`
    color: ${({ theme, $type, $solid }) => theme.alert[$type][`color${$solid ? 'Solid' : ''}`]};
    font-size: ${({ theme }) => theme.alert.text.fontSize};
`;

export const AlertIconUi = styled.div<AlertIconUiProps>`
    flex: 0 0 auto;
    margin-left: 10px;

    ${IconUi} {
        cursor: pointer;
        fill: ${({ theme, $type, $solid }) => theme.alert[$type][`color${$solid ? 'Solid' : ''}`]};
    }
`;
