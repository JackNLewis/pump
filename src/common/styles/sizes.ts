export const sizing = {
  // Border Widths
  borderWidth: {
    none: 0,
    thin: 1,
    normal: 2,
    thick: 3,
    heavy: 4,
  },

  // Border Radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999, // For circular elements
  },

  // Component Heights
  height: {
    input: 50,
    inputSm: 40,
    inputLg: 56,
    button: 44,
    buttonSm: 36,
    buttonLg: 52,
    header: 60,
    tabBar: 50,
    avatar: 40,
    avatarSm: 32,
    avatarLg: 64,
  },

  // Icon Sizes
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },

  // General Dimensions
  dimension: {
    cardWidth: 328,
    modalWidth: 400,
    maxContentWidth: 1200,
    sidebarWidth: 280,
    thumbnailSize: 80,
  },
} as const;

// Type exports for TypeScript usage
export type BorderWidth = typeof sizing.borderWidth;
export type BorderRadius = typeof sizing.borderRadius;
export type Height = typeof sizing.height;
export type Icon = typeof sizing.icon;
export type Dimension = typeof sizing.dimension;