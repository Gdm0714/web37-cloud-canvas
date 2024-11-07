import { ViewBox } from '@types';
import { RefObject } from 'react';

export const getRelativeCoordinatesForViewBox = (
    clientX: number,
    clientY: number,
    ref: RefObject<HTMLElement>,
    viewBox: ViewBox
): { x: number; y: number } => {
    if (!ref.current) return { x: 0, y: 0 };

    const zoomPan = ref.current.getBoundingClientRect();
    const relativeX = clientX - zoomPan.left;
    const relativeY = clientY - zoomPan.top;

    const x = (relativeX / zoomPan.width) * viewBox.width + viewBox.x;
    const y = (relativeY / zoomPan.height) * viewBox.height + viewBox.y;

    return { x, y };
};