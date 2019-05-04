import React from 'react';
import { ThemeProvider } from 'styled-components';

export const dynamicGutter = [8, 8, 12, 12, 16];
export const dynamicMarginFull = [-16, -16, -24, -24, -32];
export const dynamicMarginHalf = dynamicMarginFull.map((margin) => margin / 2);

export const gridConfig = {
   space: [0, 4, 8, 16, 24, 32, 48],
   breakpoints: HYBRID_RELEASE ? [480, 768, 992, 1200, 999999] : [520, 720, 900, 1080, 999999], // I hope it is now final
};

const GridProvider = ({ children }: { children?: React.ReactChild }) => (
   <ThemeProvider theme={gridConfig}>
      {children}
   </ThemeProvider>
);

export default GridProvider;
