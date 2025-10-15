declare namespace NodeJS {
    interface ProcessEnv {
      PORT : number,
      MONGODB_URI : string,
      JWT_SECRET : string,
      SMTP_PASS : string,
      SMTP_USER : string
    }
  }