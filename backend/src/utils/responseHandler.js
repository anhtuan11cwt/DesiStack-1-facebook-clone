const responseHandler = (res, statusCode, message, data = null) => {
  const responseObject = {
    data,
    message,
    success: statusCode < 400,
  };

  return res.status(statusCode).json(responseObject);
};

export default responseHandler;
