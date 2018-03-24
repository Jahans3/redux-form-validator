# Redux Form Validator

A simple tool to help with sync validation in Redux Form.

#### Install
```
yarn add rf-validator
```

```
import validator from 'rf-validator'
const validator = require('rf-validator')
```

## Why?

Sync validation in Redux Form is straight-forward:
```
const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Value cannot be empty'
  }

  return errors
}
```

Handling validation like this can lead to a lot of repition, so we create more generic validation functions:
```
const validateEmpty = value => !!value ? 'Value cannot be empty' : undefined

const validate = values => {
  const errors = {}

  errors.username = validateEmpty(values.username)

  return errors
}
```

However even doing this can lead to a lot of unnecessary boilerplate once we introduce more than one rule for multiple fields:
```
const validate = values => {
  const errors = {}
  
  const isUsernameEmpty = validateEmpty(values.username)
  const isUsernameLongEnough = validateLength(values.username, 3)

  errors.username = iserUsernameEmpty || isUsernameLongEnough

  const isPasswordEmpty = validateEmpty(values.password)
  const isPasswordLongEnough = validateLength(values.password, 8

  errors.password = isPasswordEmpty || isPasswordLongEnough

  return errors
}
```

Using this package we can simply pass lists of validators to properties corresponding with fields to achieve the same result:
```
const validate = validator({
  username: [validateEmpty, val => validateLength(val, 3)],
  password: [validateEmpty, val =? validateLength(val, 8)]
})
```

Usage is exactly the same; pass to the `reduxForm` decorator:
```
export default reduxForm({
  form: 'myForm',
  validate
})(MyComponent)
```
