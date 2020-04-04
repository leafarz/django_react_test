export const config = {
  baseurl:
    process.env.NODE_ENV === 'production'
      ? 'http://127.0.0.1:8000'
      : 'http://127.0.0.1:8000',
};

export default config;
