- Formik makes designing and validating forms in React easier by giving them sort of a structure, but developers don't find its ease of validation suffice

- Validate key in useFormik hook maps to a function that performs all the necessary validations and returns an errors object. The code for the long validation function becomes a pain to look at, so developers prefer making use of yup's validation schema instead 

- To access the errors returned by the validation function, use the binding expression {formik.errors.keyErrorIsAssociatedWith} 
        


