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

export const setFormDataForEdit = pool => {
  const poolFormData = {
    id: pool.attributes.id,
    name: pool.attributes.name,
    pool_amount: pool.attributes.pool_amount,
    investor_id: pool.attributes.investor_id,
    loans: pool.loans
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    poolFormData
  }
}
