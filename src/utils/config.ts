export const config = (lang: string) => {
  return {
    headers: {
      'Content-Language': lang,
    },
  };
};
