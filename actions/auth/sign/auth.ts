"use server";

export const authSign = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject);
};
