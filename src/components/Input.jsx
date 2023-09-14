import { Field, ErrorMessage } from "formik"
import styles from './input.module.css'

// eslint-disable-next-line react/prop-types
export const Input = ({ name, type="", label, required, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.queijo} >
      {label || name}
      {required && <span>*</span>}
      </label>
      <Field as="input" name={name} type={type} {...props}/>
      <ErrorMessage component='p' name={name} />
    </div>
  )
}
