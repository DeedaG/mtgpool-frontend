export const  updateNewPoolForm = (name, value) => {
  return {
    type: "UPDATE_NEW_POOL_FORM",
    formData: { name, value }
  }
}
