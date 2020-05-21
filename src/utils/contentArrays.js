export const registerInputArray = (values, errors) => {
  return [
    {
      name: 'email',
      labelText: errors.email ? errors.email : 'email',
      inputType: 'email',
      value: values.email,
      isEmail: true,
      isSecure: false
    },
    {
      name: 'password',
      labelText: errors.password ? errors.password : 'password',
      inputType: 'password',
      value: values.password,
      isEmail: false,
      isSecure: true
    },
    {
      name: 'name',
      labelText: errors.name ? errors.name : 'name',
      inputType: 'text',
      value: values.name,
      isEmail: false,
      isSecure: false
    },
    {
      name: 'lastName',
      labelText: errors.lastName ? errors.lastName : 'last name',
      inputType: 'text',
      value: values.lastName,
      isEmail: false,
      isSecure: false
    },
    {
      name: 'address',
      labelText: errors.address ? errors.address : 'address',
      inputType: 'text',
      value: values.address,
      isEmail: false,
      isSecure: false
    },
    {
      name: 'city',
      labelText: errors.city ? errors.city : 'city',
      inputType: 'text',
      value: values.city,
      isEmail: false,
      isSecure: false
    }
  ];
};

export const orderSummaryArray = (values, errors, isLoggedIn, isEditable) => {
  return [
    {
      name: 'email',
      labelText: errors.email ? errors.email : 'email',
      inputType: 'email',
      value: values.email,
      isEmail: true,
      isSecure: false,
      isEditable: isLoggedIn ? isEditable : true
    },
    {
      name: 'name',
      labelText: errors.name ? errors.name : 'name',
      inputType: 'text',
      value: values.name,
      isEmail: false,
      isSecure: false,
      isEditable: isLoggedIn ? isEditable : true
    },
    {
      name: 'lastName',
      labelText: errors.lastName ? errors.lastName : 'last name',
      inputType: 'text',
      value: values.lastName,
      isEmail: false,
      isSecure: false,
      isEditable: isLoggedIn ? isEditable : true
    },
    {
      name: 'address',
      labelText: errors.address ? errors.address : 'address',
      inputType: 'text',
      value: values.address,
      isEmail: false,
      isSecure: false,
      isEditable: isLoggedIn ? isEditable : true
    },
    {
      name: 'city',
      labelText: errors.city ? errors.city : 'city',
      inputType: 'text',
      value: values.city,
      isEmail: false,
      isSecure: false,
      isEditable: isLoggedIn ? isEditable : true
    }
  ];
};

export const orderInitialValues = {
  email: '',
  name: '',
  lastName: '',
  address: '',
  city: '',
  country: ''
};
