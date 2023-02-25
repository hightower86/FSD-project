import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    const ref = useRef();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = element || (undefined as any);
        setMounted(true);
    }, [element]);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};
