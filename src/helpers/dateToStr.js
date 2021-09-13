export const dateToStr = (date) => {
  // Attempt :
  // Mercredi 10 septembre 2021, à 18h
  // ['2021-09-15', '2021-09-22', '2021-09-29', '2021-10-06']
  let dateObj = new Date(date);

  let dateD = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  let dateM = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  let year = dateObj.getUTCFullYear();

  let month = dateObj.getMonth();

  let day = dateObj.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  let dayNum = dateObj.getDay();

  return (
    dateD[dayNum - 1] + " " + day + " " + dateM[month] + " " + year + ", à 18h"
  );
};
