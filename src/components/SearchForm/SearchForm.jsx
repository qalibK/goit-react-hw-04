import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchForm.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() == "") {
          toast.error("Enter something");
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Toaster />
        <Field
          className={css.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
}
