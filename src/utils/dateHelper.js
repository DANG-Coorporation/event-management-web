import { DateTime } from "luxon";

export const convertStringToDate = (dateString) => {
  // yyyy-mm-dd using DateTime luxon
  const date = DateTime.fromISO(dateString);

  return date.toLocaleString(DateTime.DATE_FULL);
};

export const diffTwoDate = (date1, date2) => {
  const dateA = DateTime.fromISO(date1);
  const dateB = DateTime.fromISO(date2);
  const diff = dateB.diff(dateA, ["days"]).toObject();
  return diff.days;
};

export const convertDateTimeFormat = (datetime, formatFrom, formatTo) => {
  const dt = DateTime.fromFormat(datetime, formatFrom);
  return dt.toFormat(formatTo);
};

