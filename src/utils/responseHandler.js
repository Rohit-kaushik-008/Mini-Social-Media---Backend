export const responseHandler = ({ res, statusCode, message, data = null }) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    ...(data && { data }),
  });
};

export const errorHandler = ({
  res,
  statusCode = 500,
  message = "something went wrong!",
  error = null,
}) => {
  return res.status(statusCode).json({
    success: false,
    ...(message && { message }),
    ...(error && { error }),
  });
};
