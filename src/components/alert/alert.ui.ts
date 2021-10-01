import styled, { css } from 'styled-components';

// Ui
import { IconUi } from '../icon/icon.ui';

// Interfaces
import { Props } from './alert.d';

export const AlertUi = styled.div<Props>`
    align-items: center;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.alert.borderRadius};
    border: 1px solid transparent;
    display: flex;
    font-size: ${({ theme }) => theme.alert.fontSize};
    justify-content: flex-start;
    line-height: 1.125rem;
    padding: 12px 16px;
    
    ${({ theme, type, solid }) => type === 'success' && css`
        background-color: ${theme.alert[solid ? 'solid' : 'default'].backgroundColorSuccess};
        border-color: ${theme.alert[solid ? 'solid' : 'default'].colorSuccess};
        color: ${theme.alert[solid ? 'solid' : 'default'].colorSuccess};
    
        ${IconUi} {
            fill: ${theme.alert[solid ? 'solid' : 'default'].colorSuccess};
        }
    `};

    ${({ theme, type, solid }) => type === 'warning' && css`
        background-color: ${theme.alert[solid ? 'solid' : 'default'].backgroundColorWarning};
        border-color: ${theme.alert[solid ? 'solid' : 'default'].colorWarning};
        color: ${theme.alert[solid ? 'solid' : 'default'].colorWarning};
    
        ${IconUi} {
            fill: ${theme.alert[solid ? 'solid' : 'default'].colorWarning};
        }
    `};

    ${({ theme, type, solid }) => type === 'info' && css`
        background-color: ${theme.alert[solid ? 'solid' : 'default'].backgroundColorInfo};
        border-color: ${theme.alert[solid ? 'solid' : 'default'].colorInfo};
        color: ${theme.alert[solid ? 'solid' : 'default'].colorInfo};

        ${IconUi} {
            fill: ${theme.alert[solid ? 'solid' : 'default'].colorInfo};
        }
    `};

    ${({ theme, type, solid }) => type === 'danger' && css`
        background-color: ${theme.alert[solid ? 'solid' : 'default'].backgroundColorDanger};
        border-color: ${theme.alert[solid ? 'solid' : 'default'].colorDanger};
        color: ${theme.alert[solid ? 'solid' : 'default'].colorDanger};
    
        ${IconUi} {
            fill: ${theme.alert[solid ? 'solid' : 'default'].colorDanger};
        }
    `};

    ${IconUi} {
        margin-left: auto
    }
`;
