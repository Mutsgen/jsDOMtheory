export const studentValidTest = (object) => {
  if (isNaN(object.id)) return 1;
  if (object.id < 0) return 2;

  if (object.name.trim() === undefined) return 3;
  if (object.name.trim() === "") return 4;
  if (!isNaN(object.name.trim())) return 5;

  if (object.firstName.trim() === undefined) return 6;
  if (object.firstName.trim() === "") return 7;
  if (!isNaN(object.firstName.trim())) return 8;

  if (object.lastName.trim() === undefined) return 9;
  if (object.lastName.trim() === "") return 10;
  if (!isNaN(object.lastName.trim())) return 11;

  if (object.faculty.trim() === undefined) return 12;
  if (object.faculty.trim() === "") return 13;
  if (!isNaN(object.faculty.trim())) return 14;

  if (object.birthDate === undefined) return 15;
  if (object.birthDate === "") return 16;
  if (object.birthDate == "Invalid Date") return 17;
  if (object.birthDate.getYear() < 0) return 18;
  if (object.birthDate.getYear() > new Date().getYear()) return 19;

  if (object.birthDate.getYear() === new Date().getYear()) {
    if (object.birthDate.getMonth() < new Date().getMonth() + 1) {
      if (object.birthDate.getMonth() == new Date().getMonth()) {
        if (object.birthDate.getDate() > new Date().getDate()) {
          return 20;
        }
      }
    } else return 21;
  }
  if (object.startDate === undefined) return 22;
  if (object.startDate === "") return 23;
  if (object.startDate == "Invalid Date") return 24;
  if (object.startDate.getYear() < 100) return 25;
  if (object.startDate.getYear() > new Date().getYear()) return 26;

  if (object.startDate.getYear() === new Date().getYear()) {
    if (object.startDate.getMonth() < new Date().getMonth() + 1) {
      if (object.startDate.getMonth() == new Date().getMonth()) {
        if (object.startDate.getDate() > new Date().getDate()) {
          return 27;
        }
      }
    } else return 28;
  }

  if (object.startDate.getYear() <= object.birthDate.getYear()) return 29;
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
