const calculateZodiac = (birthday) => {
  // * Takes in a date object and uses the following conditions to figure out western and chinese zodiac sign based on date of birth
  let westernSign = "",
    chineseSign = "",
    day = birthday.getUTCDate(),
    month = birthday.getUTCMonth() + 1,
    year = birthday.getUTCFullYear(),
    dateError = false;
  // ! Error Checking
  if (!(birthday instanceof Date)) {
    return {
      dateError: true,
      message: "Input is not a Date object",
    };
  }
  if (isNaN(day) || isNaN(month)) {
    return {
      dateError: true,
      message: "Day or Month is not a number",
    };
  }

  // * Calculate Western zodiac sign
  switch (month) {
    case 3:
      if (day >= 21) westernSign = "Aries";
      else westernSign = "Pisces";
      break;
    case 4:
      if (day >= 20) westernSign = "Taurus";
      else westernSign = "Aries";
      break;
    case 5:
      if (day >= 21) westernSign = "Gemini";
      else westernSign = "Taurus";
      break;
    case 6:
      if (day >= 22) westernSign = "Cancer";
      else westernSign = "Gemini";
      break;
    case 7:
      if (day >= 23) westernSign = "Leo";
      else westernSign = "Cancer";
      break;
    case 8:
      if (day >= 23) westernSign = "Virgo";
      else westernSign = "Leo";
      break;
    case 9:
      if (day >= 23) westernSign = "Libra";
      else westernSign = "Virgo";
      break;
    case 10:
      if (day >= 24) westernSign = "Scorpio";
      else westernSign = "Libra";
      break;
    case 11:
      if (day >= 22) westernSign = "Sagittarius";
      else westernSign = "Scorpio";
      break;
    case 12:
      if (day >= 22) westernSign = "Capricorn";
      else westernSign = "Sagittarius";
      break;
    case 1:
      if (day >= 20) westernSign = "Aquarius";
      else westernSign = "Capricorn";
      break;
    case 2:
      if (day >= 19) westernSign = "Pisces";
      else westernSign = "Aquarius";
      break;
    default:
      dateError = true;
  }

  // * Calculate Chinese zodiac sign

  const chineseZodiac = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];

  chineseSign = chineseZodiac[(year - 4) % 12];

  return {
    westernSign: westernSign,
    chineseSign: chineseSign,
    dateError: dateError,
    date: `${month}, ${day}, ${year}`,
  };
};

export default calculateZodiac;
