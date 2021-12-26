// Component Props
export interface Props {
    fill?: string;
    size?: number;
    viewBox?: 'string'
    name: string;
    onClick?: () => void;
}

// Component Theme
export interface Icon {
    fill: string;
    size: number;
}
