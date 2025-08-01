module.exports = {
  apps: [
    {
      name: "trace-creative-app",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
