export const studentValid = (object) => {
  if (isNaN(object.id)) return false;
  if (object.id < 0) return false;

  if (object.name.trim() === undefined) return false;
  if (object.name.trim() === "") return false;
  if (!isNaN(object.name.trim())) return false;

  if (object.firstName.trim() === undefined) return false;
  if (object.firstName.trim() === "") return false;
  if (!isNaN(object.firstName.trim())) return false;

  if (object.lastName.trim() === undefined) return false;
  if (object.lastName.trim() === "") return false;
  if (!isNaN(object.lastName.trim())) return false;

  if (object.faculty.trim() === undefined) return false;
  if (object.faculty.trim() === "") return false;
  if (!isNaN(object.faculty.trim())) return false;

  if (object.birthDate === undefined) return false;
  if (object.birthDate === "") return false;
  if (object.birthDate == "Invalid Date") return false;
  if (object.birthDate.getYear() < 0) return false;
  if (object.birthDate.getYear() > new Date().getYear()) return false;

  if (object.birthDate.getYear() === new Date().getYear()) {
    if (object.birthDate.getMonth() < new Date().getMonth() + 1) {
      if (object.birthDate.getMonth() == new Date().getMonth()) {
        if (object.birthDate.getDate() > new Date().getDate()) {
          return false;
        }
      }
    } else return false;
  }
  if (object.startDate === undefined) return false;
  if (object.startDate === "") return false;
  if (object.startDate == "Invalid Date") return false;
  if (object.startDate.getYear() < 100) return false;
  if (object.startDate.getYear() > new Date().getYear()) return false;

  if (object.startDate.getYear() === new Date().getYear()) {
    if (object.startDate.getMonth() < new Date().getMonth() + 1) {
      if (object.startDate.getMonth() == new Date().getMonth()) {
        if (object.startDate.getDate() > new Date().getDate()) {
          return false;
        }
      }
    } else return false;
  }

  if (object.startDate.getYear() <= object.birthDate.getYear()) return false;
  // if (object.startDate.getYear() === object.birthDate.getYear()) {
  //   if (object.birthDate.getMonth() < object.startDate.getMonth() + 1) {
  //     if (object.birthDate.getMonth() == object.startDate.getMonth()) {
  //       if (object.startDate.getDate() > object.birthDate.getDate()) {
  //         return false;
  //       }
  //     }
  //   } else return false;
  // }
  return true;
};
