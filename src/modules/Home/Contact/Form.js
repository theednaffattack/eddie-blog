import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"

import { Button as ButtonBase, Text as TextBase } from "rebass"

import { borders, display, fontSize, space, width } from "styled-system"

import styled from "styled-components"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Text = styled(TextBase)`
  ${space}
`

const Input = styled.input`
  ${borders}
  ${fontSize}
  ${width}
  ${space}
  font-size: 1em;
`

const Textarea = styled.textarea`
  ${borders}
  ${fontSize}
  ${width}
  ${space}
  font-size: 1em;
`

const Button = styled(ButtonBase)`
  ${display}
`

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Message body is required!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required!"),
})

const MyForm = props => {
  const {
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    status,
    touched,
    values,
  } = props
  return (
    <form name="contact" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <Text fontSize={3} mt={3} htmlFor="name">
        Name
      </Text>
      <Input
        p={1}
        fontSize={3}
        width={1}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && (
        <Text fontSize={3} color="pink3" id="error-name">
          {errors.name}
        </Text>
      )}

      <Text fontSize={3} mt={3} htmlFor="email">
        Email
      </Text>
      <Input
        p={1}
        fontSize={3}
        width={1}
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        name="email"
      />

      {errors.email && touched.email && (
        <Text fontSize={3} color="pink3" id="error-email">
          {errors.email}
        </Text>
      )}
      <Text fontSize={3} mt={3} htmlFor="message">
        Message
      </Text>
      <Textarea
        fontSize={3}
        width={1}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.message}
        rows="4"
        cols="20"
        name="message"
      />

      {errors.message && touched.message && (
        <Text fontSize={3} color="pink3" id="error-message">
          {errors.message}
        </Text>
      )}
      <Button mt={3} display="block" bg="yellow2" color="text" type="submit">
        Submit
      </Button>
      <Text color="white" fontSize={4}>
        {status}
      </Text>
    </form>
  )
}

export const Form = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", message: "" }),

  // Custom sync validation
  validationSchema: ContactSchema,
  //   validate: values => {
  //     const errors = {};

  //     if (!values.name) {
  //       errors.name = "Required";
  //     }

  //     return errors;
  //   },

  handleSubmit: (values, { resetForm, setSubmitting, setStatus }) => {
    const bodyFormData = new FormData()
    bodyFormData.set("name", values.name)
    bodyFormData.set("email", values.email)
    bodyFormData.set("message", values.message)
    bodyFormData.set("form-name", "contact")
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => resetForm())
      .catch(error => alert(error))
  },

  displayName: "BasicForm",
})(MyForm)
