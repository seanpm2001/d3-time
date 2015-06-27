import interval from "./interval";

export default interval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCMonth(0, 1);
}, function(date, offset) {
  date.setUTCFullYear(date.getUTCFullYear() + offset);
});
