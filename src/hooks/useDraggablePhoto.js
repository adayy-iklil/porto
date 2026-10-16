import { useState, useRef } from 'react';

export function useDraggablePhoto() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    // Only drag with primary mouse button or touch
    if (e.button !== undefined && e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setOffset({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
    // Spring physics bounce return to original spot
    setOffset({ x: 0, y: 0 });
  };

  const dragProps = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerUp,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0) rotate(${Math.min(
        Math.max(offset.x * 0.05, -15),
        15
      )}deg) ${isDragging ? 'scale(1.05)' : 'scale(1)'}`,
      transition: isDragging
        ? 'none'
        : 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
      cursor: isDragging ? 'grabbing' : 'grab',
      touchAction: 'none',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      position: 'relative',
      zIndex: isDragging ? 9999 : 2,
    },
  };

  return { isDragging, dragProps, offset };
}
