'use client';

export default function SafeArea() {
  return(
    <div style={{ backgroundColor: 'black', height: 'env(safe-area-inset-top)' }} />
  );
}