// @flow

/**
 * Cycles through a list of validators to build form errors
 * @param validators
 * @returns {*}
 */
export default function validate (validators: Object): Function {
  return (values: Object): Object => {
    const errors: Object = {}

    for (const prop: string in validators) {
      if (validators.hasOwnProperty(prop)) {
        const rules: Array<Function> = Array.isArray(validators[prop])
          ? validators[prop]
          : [validators[prop]]
        const first: ?Function = rules.find((validator: Function): ?string => validator(values[prop]))
        const result = first(values[prop])

        if (result) {
          errors[prop] = result
        }
      }
    }

    return errors
  }
}

