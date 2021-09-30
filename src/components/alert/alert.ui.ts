import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

// Ui
import { IconUi } from '../icon/icon.ui';

// Interfaces
import { Props } from './alert.d';

export const AlertUi = styled.div<HTMLAttributes<HTMLDivElement> & Props>`
    align-items: center;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.alert.borderRadius};
    border: 1px solid transparent;
    display: flex;
    font-size: ${({ theme }) => theme.alert.fontSize};
    justify-content: flex-start;
    line-height: 1.25rem;
    padding: 12px 16px;
    
    ${({ theme, type, solid }) => type === 'success' && css`
        background-color: ${lighten(solid ? 0 : 0.425, theme.alert.colorSuccess)};
        border-color: ${theme.alert.colorSuccess};
        color: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorSuccess)};
    
        ${IconUi} {
            fill: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorSuccess)};
        }
    `};

    ${({ theme, type, solid }) => type === 'warning' && css`
        background-color: ${lighten(solid ? 0 : 0.425, theme.alert.colorWarning)};
        border-color: ${theme.alert.colorWarning};
        color: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorWarning)};
    
        ${IconUi} {
            fill: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorWarning)};
        }
    `};

    ${({ theme, type, solid }) => type === 'info' && css`
        background-color: ${lighten(solid ? 0 : 0.425, theme.alert.colorInfo)};
        border-color: ${theme.alert.colorInfo};
        color: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorInfo)};

        ${IconUi} {
            fill: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorInfo)};
        }
    `};

    ${({ theme, type, solid }) => type === 'danger' && css`
        background-color: ${lighten(solid ? 0 : 0.3, theme.alert.colorDanger)};
        border-color: ${theme.alert.colorDanger};
        color: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorDanger)};
    
        ${IconUi} {
            fill: ${solid ? theme.colors.white : darken(0.1, theme.alert.colorDanger)};
        }
    `};

    ${IconUi} {
        margin-left: auto
    }
`;
