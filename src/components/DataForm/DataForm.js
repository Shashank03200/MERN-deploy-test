import React from "react";

import { useFormik } from "formik";

import "./DataForm.css";
import useFile from "../../hooks/File/useFile";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.author) {
    errors.author = "Required";
  }

  if (!values.quantity) {
    errors.quantity = "Required";
  }

  return errors;
};

const DataForm = () => {
  const { createFile, createFileLoading } = useFile();

  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      quantity: "",
    },
    validate,

    onSubmit: (values, { resetForm }) => {
      createFile(values);
      resetForm();
    },
  });

  return (
    <div className="DataForm">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.errors.author ? <div>{formik.errors.author}</div> : null}
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.quantity}
        />
        {formik.errors.quantity ? <div>{formik.errors.quantity}</div> : null}

        <button type="submit" disabled={createFileLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataForm;
