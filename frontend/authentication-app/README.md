# React Hook Forms Notes

```javascript
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

1. Register
   Register is a function provided by the useForm hook. we can assing
   it to each input field so that the react-hook-form can track the changes for the input field value.
   when you console.log {...register('email')} we get {name:'email', onChange:f, onBlur:f, ref:f}

2. handleSubmit
   This is the function we can call when the form is submitted

3. Errors
   Errors is a nested property in the formState object which will contain the validation errors if any.
