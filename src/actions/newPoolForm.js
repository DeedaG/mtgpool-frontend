export const  updateNewPoolForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_NEW_POOL_FORM",
    formData
  }
}
