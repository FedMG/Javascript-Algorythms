// Analyze what tipe of value is boolean
const whichIsBool = bool => {
  if (bool === true || bool === false) {
    return true;

  } else {
    return false;
  }
}

whichIsBool(null);