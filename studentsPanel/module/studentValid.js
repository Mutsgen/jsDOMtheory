export const studentValid = (object) => {
  if (isNaN(object.id)) return false;
  if (object.id < 0) return false;

  if (object.name === undefined) return false;
  if (object.name === "") return false;
  if (!isNaN(object.name)) return false;

  if (object.firstName === undefined) return false;
  if (object.firstName === "") return false;
  if (!isNaN(object.firstName)) return false;

  if (object.lastName === undefined) return false;
  if (object.lastName === "") return false;
  if (!isNaN(object.lastName)) return false;

  if (object.faculty === undefined) return false;
  if (object.faculty === "") return false;
  if (!isNaN(object.faculty)) return false;

  if (object.birthDate === undefined) return false;
  if (object.birthDate === "") return false;
  if (object.birthDate == "Invalid Date") return false;
  if (object.birthDate.getYear() < 0) return false;
  if (object.birthDate.getYear() > new Date().getYear()) return false;

  if (object.birthDate.getYear() == new Date().getYear()) {
    if (object.birthDate.getMonth() <= new Date().getMonth()) {
      if (!(object.birthDate.getDate() <= new Date().getDate())) {
        return false;
      }
    } else return false;
  }
  if (object.startDate === undefined) return false;
  if (object.startDate === "") return false;
  if (object.startDate == "Invalid Date") return false;
  if (object.startDate.getYear() < 100) return false;
  if (object.startDate.getYear() > new Date().getYear()) return false;

  if (object.startDate.getYear() == new Date().getYear()) {
    if (object.startDate.getMonth() <= new Date().getMonth()) {
      if (!(object.startDate.getDate() <= new Date().getDate())) {
        return false;
      }
    } else return false;
  }
  return true;
};
