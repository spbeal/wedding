import { alpha, createTheme, darken, lighten } from '@mui/material/styles';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export const defaultThemeColors: ThemeColors = {
  primary: '#b19cd9',
  secondary: '#6a4c93',
  background: '#ffffff',
  text: '#1a1a1a',
};

declare module '@mui/material/styles' {
  interface Theme {
    wedding: {
      accent: string;
      surface: string;
      muted: string;
      border: string;
      overlay: string;
      gradients: {
        hero: string;
        footer: string;
        brand: string;
      };
      shadows: {
        soft: string;
        floating: string;
      };
    };
  }

  interface ThemeOptions {
    wedding?: Partial<Theme['wedding']>;
  }
}

export function createWeddingTheme(colors: ThemeColors) {
  const lightPrimary = lighten(colors.primary, 0.1);
  const darkSecondary = darken(colors.secondary, 0.16);
  const paperColor = colors.background === '#ffffff' ? '#fcf9ff' : colors.background;
  const heroGradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
  const footerGradient = `linear-gradient(180deg, ${alpha(colors.primary, 0.08)} 0%, ${alpha(colors.secondary, 0.16)} 100%)`;

  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: colors.primary,
        light: lightPrimary,
        dark: darkSecondary,
        contrastText: '#ffffff',
      },
      secondary: {
        main: colors.secondary,
        light: lighten(colors.secondary, 0.1),
        dark: darkSecondary,
        contrastText: '#ffffff',
      },
      background: {
        default: colors.background,
        paper: paperColor,
      },
      text: {
        primary: colors.text,
        secondary: alpha(colors.text, 0.72),
      },
      divider: alpha(colors.secondary, 0.14),
    },
    typography: {
      fontFamily: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        letterSpacing: '2px',
      },
      h2: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
      },
      h3: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
      },
      h4: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
      },
      button: {
        fontWeight: 600,
        letterSpacing: '0.03em',
      },
    },
    shape: {
      borderRadius: 14,
    },
    wedding: {
      accent: '#d4af37',
      surface: alpha(colors.primary, 0.08),
      muted: alpha(colors.secondary, 0.08),
      border: alpha(colors.secondary, 0.18),
      overlay: alpha('#ffffff', 0.78),
      gradients: {
        hero: heroGradient,
        footer: footerGradient,
        brand: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      },
      shadows: {
        soft: '0 14px 32px rgba(50, 31, 80, 0.10)',
        floating: '0 18px 40px rgba(20, 16, 12, 0.12)',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.background,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '999px',
            padding: '10px 24px',
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '22px',
            boxShadow: '0 8px 24px rgba(33, 18, 52, 0.08)',
            border: `1px solid ${alpha(colors.secondary, 0.08)}`,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}