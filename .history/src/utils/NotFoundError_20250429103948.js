class NotFoundError extends Error {
  constructor(args) {
    super(args);

    this.code = 404;
  }
}

export default NotFoundError;
