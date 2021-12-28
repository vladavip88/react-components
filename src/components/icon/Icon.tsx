import React, { SVGProps } from 'react';

// SVG
import * as Icons from './svg';

// Interfaces
import { IconProps } from './icon.d';

const Icon: React.FC<IconProps> = ({ name, ...restProps }) => {
    const SvgIcon: React.FC<SVGProps<SVGSVGElement>> = Icons[name as keyof {}];

    return (
        <SvgIcon
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
        />
    );
};

export default Icon;
