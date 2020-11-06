export const  updateNewInvestorForm = (name, value) => {

  const formData = {name,value}
  return {
    type: "UPDATE_NEW_INVESTOR_FORM",
    formData
  }
}

export const  resetNewInvestorForm = () => {
  return {
    type: "RESET_NEW_INVESTOR_FORM"
  }
}

export const setFormDataForEditInv = investor => {
  const investorFormData = {
    id: investor.id,
    name: investor.attributes.name,
    fee: investor.attributes.fee
  }
  return {
    type: "SET_FORM_DATA_FOR_EDITINV",
    investorFormData
  }
}
