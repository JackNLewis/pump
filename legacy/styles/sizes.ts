export const sizing = {
  // Border Widths
  borderWidth: {
    none: 0 as const,
    thin: 1 as const,
    normal: 2 as const,
    thick: 3 as const,
    heavy: 4 as const,
  },

  // Border Radius
  borderRadius: {
    none: 0 as const,
    sm: 4 as const,
    md: 8 as const,
    lg: 12 as const,
    xl: 16 as const,
    '2xl': 24 as const,
    full: 9999 as const, // For circular elements
  },

  // Component Heights
  height: {
    input: 50 as const,
    inputSm: 40 as const,
    inputLg: 56 as const,
    button: 44 as const,
    buttonSm: 36 as const,
    buttonLg: 52 as const,
    header: 60 as const,
    tabBar: 50 as const,
    avatar: 40 as const,
    avatarSm: 32 as const,
    avatarLg: 64 as const,
  },

  // Icon Sizes
  icon: {
    xs: 12 as const,
    sm: 16 as const,
    md: 20 as const,
    lg: 24 as const,
    xl: 32 as const,
    '2xl': 48 as const,
  },

  // General Dimensions
  dimension: {
    cardWidth: 328 as const,
    modalWidth: 400 as const,
    maxContentWidth: 1200 as const,
    sidebarWidth: 280 as const,
    thumbnailSize: 80 as const,
  },
} as const;

// Type exports for TypeScript usage
export type BorderWidth = typeof sizing.borderWidth;
export type BorderRadius = typeof sizing.borderRadius;
export type Height = typeof sizing.height;
export type Icon = typeof sizing.icon;
export type Dimension = typeof sizing.dimension;