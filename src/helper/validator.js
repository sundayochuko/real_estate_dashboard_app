export default function validateInfo(values) {
  let errors = {};

  if (values.properties.length < 1 && values.searchTerm.length >= 1) {
    errors.filteredProperties = `There are no results for “ ${values.searchTerm} ”.`;
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 or more characters";
  }
  return errors;
}
