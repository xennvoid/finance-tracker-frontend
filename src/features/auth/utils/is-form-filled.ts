export const isFormFilled = (formData: FormData) => {
  return Array.from(formData.values()).every((v) => v);
};
