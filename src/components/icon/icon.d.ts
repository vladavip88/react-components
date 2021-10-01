export interface IconProps {
    fill?: string;
    size?: number;
    viewBox?: 'string'
}

export interface Props extends IconProps {
    name: string;
    onClick: () => void;
}
