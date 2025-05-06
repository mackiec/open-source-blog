/**
 * Theme Configuration
 * 
 * This file contains theme variables that can be customized to change
 * the appearance of your blog. These values are used throughout the site.
 */

const theme = {
  // Color Palette
  colors: {
    // Primary colors - used for links, buttons, and accents
    primary: {
      light: '#0000FF', // Blue for light mode
      dark: '#fdbd72',  // Orange for dark mode
    },
    
    // Background colors
    background: {
      light: '#ffffff',
      dark: '#121212',
    },
    
    // Text colors
    text: {
      light: '#333333',
      dark: '#f5f5f5',
    },
    
    // Muted text colors
    muted: {
      light: '#666666',
      dark: '#a0a0a0',
    },
    
    // Border colors
    border: {
      light: '#e0e0e0',
      dark: '#333333',
    },
    
    // Card and container backgrounds
    card: {
      light: '#f5f5f5',
      dark: '#1e1e1e',
    },
    
    // Success, error, warning colors
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  
  // Typography
  typography: {
    // Font sizes (in pixels)
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
    
    // Line heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    // Font weights
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
  },
  
  // Spacing (in pixels)
  spacing: {
    '0': '0',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '8': '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '2px',
    default: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  
  // Transitions
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
  
  // Z-index values
  zIndex: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    'auto': 'auto',
  },
  
  // Breakpoints (in pixels)
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export default theme;
