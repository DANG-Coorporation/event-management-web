import { DateTime } from "luxon";

export const convertStringToDate = (dateString) => {
  // yyyy-mm-dd using DateTime luxon
  const date = DateTime.fromISO(dateString);

  return date.toLocaleString(DateTime.DATE_FULL);
};

export const diffTwoDate = (date1, date2, isNormalize = false) => {
  const dateA = DateTime.fromISO(date1);
  const dateB = DateTime.fromISO(date2);
  const diff = dateB.diff(dateA, ["days"]).toObject();
  if (!isNormalize) {
    return diff.days;
  }
  
  const diffAbs = Math.abs(diff.days);

  if (diffAbs === 0) {
    return "hari ini";
  } else if (diffAbs < 32) {
    return `${Math.abs(diff.days)} hari yang lalu`;
  } else if (diffAbs < 361) {
    return `${Math.abs(diff.months)} bulan yang lalu`;
  } else {
    return `${Math.abs(diff.years)} tahun yang lalu`;
  }
};

export const convertDateTimeFormat = (datetime, formatFrom, formatTo) => {
  const dt = DateTime.fromFormat(datetime, formatFrom);
  return dt.toFormat(formatTo);
};
