class NotAuthorizedError extends Error {
  constructor(args) {
    super(args);

    this.code = 401;
  }
}

export default NotAuthorizedError;
