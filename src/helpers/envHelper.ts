export const getIsProd = () => {
  const envVars = import.meta.env ?? {};

  return (
    (envVars['NODE_ENV'] ?? '').toLocaleLowerCase() === 'production' ||
    (envVars['MODE'] ?? '').toLocaleLowerCase() === 'production'
  );
};
