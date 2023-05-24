function configuration(): any {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
  };
}

export default configuration;
