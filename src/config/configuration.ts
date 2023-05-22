function configuration(): any {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
    },
  };
}

export default configuration;
