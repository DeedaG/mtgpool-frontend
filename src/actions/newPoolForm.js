export const  updateNewPoolForm = (name, value) => {
  const formData = {name,value}

  return {
    type: "UPDATE_NEW_POOL_FORM",
    formData
  }
}

export const  resetNewPoolForm = () => {
  return {
    type: "RESET_NEW_POOL_FORM"
  }
}
