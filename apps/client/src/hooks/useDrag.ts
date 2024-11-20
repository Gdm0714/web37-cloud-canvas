import { useCanvasContext } from '@contexts/CanvasContext';
import { useCanvasDimensionContext } from '@contexts/CanvasDimensionContext';
import { Point } from '@types';
import {
    getGridAlignedPoint2d,
    getGridAlignedPoint3d,
    getSvgPoint,
} from '@utils';
import { useState } from 'react';

type Props = {
    initialPoint: Point;
    updateFn: (newPoint: Point) => void;
};

export default ({ initialPoint, updateFn }: Props) => {
    const { canvas } = useCanvasContext();
    const { dimension } = useCanvasDimensionContext();

    const [isDragging, setIsDragging] = useState(false);
    const [startDragPoint, setStartDragPoint] = useState<Point | null>(null);

    const startDrag = (point: Point) => {
        setIsDragging(true);
        const svgPoint = getSvgPoint(canvas, point);
        setStartDragPoint(svgPoint);
    };

    const moveDrag = (point: Point) => {
        requestAnimationFrame(() => {
            if (!(isDragging && canvas && startDragPoint)) return;

            const svgPoint = getSvgPoint(canvas, point);
            const offset = {
                x: svgPoint.x - startDragPoint.x,
                y: svgPoint.y - startDragPoint.y,
            };

            const newPoint = {
                x: initialPoint.x + offset.x,
                y: initialPoint.y + offset.y,
            };

            const alignedPoint =
                dimension === '2d'
                    ? getGridAlignedPoint2d(newPoint)
                    : getGridAlignedPoint3d(newPoint);

            updateFn(alignedPoint);
        });
    };

    const stopDrag = () => {
        setIsDragging(false);
        setStartDragPoint(null);
    };

    return {
        isDragging,
        startDrag,
        moveDrag,
        stopDrag,
    };
};
