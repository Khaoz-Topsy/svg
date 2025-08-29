export type EnvMode = 'web' | 'ssg' | 'auto-slide';

export const isServerMode = (mode: EnvMode) => ['ssg', 'auto-slide'].includes(mode);
