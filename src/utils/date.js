import dayjs from "dayjs";

export function getFormattedDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function calcAgeFromDate(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Adjust age if the current month is before the birth month, or it's the birth month but the day hasn't occurred yet
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}


export const parseToDayjs = (dateString) => {
  return dateString ? dayjs(dateString, 'YYYY-MM-DD') : null;
};

// Utility function to convert dayjs object to string
export const formatToString = (date) => {
  return date ? date.format('YYYY-MM-DD') : '';
};
