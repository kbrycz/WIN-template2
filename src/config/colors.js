/**
 * Color Configuration
 * 
 * Centralized color palette for the application.
 * Modify these colors to customize the theme.
 * Colors are automatically integrated into Tailwind CSS.
 */

export const colors = {
  // Primary colors - main brand colors (#d63031)
  // Full scale properly derived from #d63031
  primary: {
    50: '#fdf2f2',
    100: '#fde8e8',
    200: '#fbd5d5',
    300: '#f8b4b4',
    400: '#f27474',
    500: '#e74c3c',
    600: '#d63031', // Your specified primary color
    700: '#b82828',
    800: '#9b2424',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  // Secondary colors - darker red variations that complement #d63031
  secondary: {
    50: '#fef7f7',
    100: '#fef2f2',
    200: '#fde2e2',
    300: '#fbc5c5',
    400: '#f79a9a',
    500: '#ef6b6b',
    600: '#e24545',
    700: '#c93030',
    800: '#a52929',
    900: '#872727',
    950: '#491111',
  },
  
  // Accent colors - coral/orange-red variations that harmonize with #d63031
  accent: {
    50: '#fff5f3',
    100: '#ffe8e4',
    200: '#ffd5cd',
    300: '#ffb5a8',
    400: '#ff8a75',
    500: '#f96548',
    600: '#e64a2e',
    700: '#c13a21',
    800: '#a0331f',
    900: '#842f20',
    950: '#48150c',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Semantic colors - red variations to match primary theme
  // Success: lighter, softer red tones
  success: {
    50: '#fdf2f2',
    100: '#fde8e8',
    200: '#fbd5d5',
    300: '#f8b4b4',
    400: '#f27474',
    500: '#e74c3c',
    600: '#d63031',
    700: '#b82828',
    800: '#9b2424',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  // Warning: warmer red-orange tones
  warning: {
    50: '#fff5f3',
    100: '#ffe8e4',
    200: '#ffd5cd',
    300: '#ffb5a8',
    400: '#ff8a75',
    500: '#f96548',
    600: '#e64a2e',
    700: '#c13a21',
    800: '#a0331f',
    900: '#842f20',
    950: '#48150c',
  },
  
  // Error: darker, deeper red tones
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  // Signup section - soft red tone
  signup: {
    background: '#e85c5c',
    backgroundHover: '#d94f4f',
    text: '#ffffff',
    placeholder: '#b82828',
    button: '#ffffff',
    buttonHover: '#f0f0f0',
  },

  // Base colors
  white: '#ffffff',
  black: '#000000',
}
