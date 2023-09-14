import { Form, Formik } from "formik"
import * as Yup from 'yup'
import styles from './form.module.css'
import { Input } from '../components/Input'


export const FormUse = () => {
  const initialValues = ({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    naturalidade: "",
    endereço: "",
    cidade: "",
    email: "",
    celular: "",
  })

  
  // validação Yup
  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, "O nome precisa ter no minimo 3 letras")
      .required("Campo obrigatorio"),
    sobrenome: Yup.string()
      .required("campo obrigatorio"),
    email: Yup.string()
      .email('Invalid Email')
      .required("E-mail obrigatorio"),
    dataNascimento: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    celular: Yup.string()
      .max(13, "O campo deve ter no máximo 13 caracteres")
      .required("Campo obrigatório"),
  })
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)

    setSubmitting(false)
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cabecalho}>
          <h1>Create Account</h1>
        </div>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <Form >
              <div className={styles.row}>
                <Input name='nome' required />
                <Input name='sobrenome' required />
              </div>

              <div className={styles.row}>
                <Input
                  name='dataNascimento'
                  type="date"
                  label='Data de Nascimento'
                  required
                />
                <Input name='naturalidade' />
              </div>

              <div className={styles.row}>
                <Input name="endereço" />
                <Input name="cidade" disabled={!values.endereço} />
              </div>

              <div className={styles.row}>
                <Input name="email" type="email" required />
                <Input name="celular" type="number" required />
              </div>

              <div className={styles.gap}>
                <button className={styles.btn} disabled={isSubmitting} type="submit" >Enviar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}


export default FormUse