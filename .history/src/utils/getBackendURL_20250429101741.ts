const getBackendURL = () => {
  // @ts-expect-error: import.meta.env is not typed in some environments
  const envURL = import.meta.env.VITE_BACKEND_URL;

  if (envURL) {
    return envURL;
  }

  const mode = process.env.NODE_ENV;

  if (mode === "development") {
    return "http://localhost:5173/api";
  }

  return window.location.origin;
};

export default getBackendURL;
