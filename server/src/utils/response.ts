export const sendResponse = (
  res: any,
  status: number,
  success: boolean,
  message: string,
  data?: any,
) => {
  res.status(status).json({ success, message, data });
};
