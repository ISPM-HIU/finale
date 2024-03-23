export const isValidEmail = (email) => {
  // Regular expression pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  return password.length >= 3
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Regular expression pattern for phone number validation
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
};
