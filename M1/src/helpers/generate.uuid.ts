export const generateUuid = function (): string {
  return (
    Math.random().toString() +
    Math.random().toString() +
    Math.random().toString()
  );
};
