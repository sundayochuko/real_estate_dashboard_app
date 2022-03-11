import { User } from "../DummyData/user";

export default function validateInfo(values) {
  let errors = {};

  if (values.properties) {
    if (values.properties.length < 1 && values.searchTerm.length >= 1) {
      errors.filteredProperties = `There are no results for “ ${values.searchTerm} ”.`;
    }
  }

  if (values.userName) {
    if (values.userName.toLowerCase() !== User.userName.toLowerCase()) {
      errors.userName = "Username incorrect";
    }

    if (!values.userName) {
      errors.userName = "Username required";
    }
  }

  if (values.userName) {
    if (values.password.toLowerCase() !== User.password.toLowerCase()) {
      errors.password = "Password incorrect";
    }

    if (!values.password) {
      errors.password = "Password required";
    }
  }
  return errors;
}
