export const responseHandler = (
    { res, statusCode, message, data = null }
) => {

  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    ...(data && { data }),
  });
};

export const errorHandler = ({res, statusCode, message, error = null}) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error }),
  });
};
