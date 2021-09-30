export interface Props {
    type?: 'success' | 'info' | 'warning' | 'danger';
    solid?: boolean;
    closable?: boolean;
    onClose?: () => void;
}