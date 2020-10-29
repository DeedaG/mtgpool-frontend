export const  updateNewInvestorForm = (name, value) => {

  const formData = {name,value}
  console.log("formData", formData)
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

export const setFormDataForEdit = investor => {
console.log("investor", investor)
  const investorFormData = {
    id: investor.attributes.id,
    name: investor.attributes.name,
    fee: investor.attributes.fee
  }
  console.log("investorFormData:", investorFormData)
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    investorFormData
  }
}
