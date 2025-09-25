export type EnvMode = 'web' | 'ssg';

const serverSideEnvs: Array<EnvMode> = ['ssg'];
export const isServerMode = (mode: EnvMode) => serverSideEnvs.includes(mode);
