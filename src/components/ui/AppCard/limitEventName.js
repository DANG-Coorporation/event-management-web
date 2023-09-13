export const limitEventName = (eventName = "", limit) => {
  if (eventName.length > limit) {
    let temp = eventName.split("");
    temp.splice(limit, temp.length - limit);
    let str = temp.join("");
    str += "...";
    return str;
  } else {
    return eventName;
  }
};
