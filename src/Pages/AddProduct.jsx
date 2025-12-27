import { Formik, Form, Field } from "formik";
import React from "react";
import createValidationSchema from "../schema/ValidationSchema";

const initialValues = {
  productName: "",
  category: "",
  rating: "",
  price: "",
  offerPrice: "",
  offerPercentage: "",
  image: null,
};

const FileInput = ({ field, form }) => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          form.setFieldValue(field.name, e.currentTarget.files[0]);
        }}
      />

      {form.values[field.name] && (
        <img className="max-h-15 w-auto"
          src={URL.createObjectURL(form.values[field.name])}
          alt="preview"
          width={150}
        />
      )}
    </div>
  );
};






function AddProduct() {


  


  return (
    <div className=" h-120 w-full flex items-start justify-center ">
      <div className="border-gray-400 z-1 h-auto mt-30 shadow-2xl bg-linear-to-br from-gray-300 to-white p-6 w-100 rounded-lg ">
        <Formik
          initialValues={initialValues}
          validationSchema={createValidationSchema}
        >
          {({ errors }) => (
            <Form>
              <div className="grid grid-cols-2">
                <label htmlFor="productName" className="">
                  Product Name :
                </label>
                <small>
                  <Field
                    type="text"
                    className="border pl-2 p-2 w-full rounded-md"
                    name="productName"
                    placeholder="Enter the product name"
                  />
                </small>
                <br />
                {errors.productName && (
                  <small className="text-red-500">{errors.productName}</small>
                )}
              </div>





              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="category" className="form-label">
                  Category :
                </label>
                <small>
                  <Field
                    as="select"
                    name="category"
                    className="border pl-2 p-2 w-full rounded-md"
                  >
                    <option value="">Select Category</option>
                    <option value="smart phone">Smart Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="tv">TV</option>
                  </Field>
                </small>
                <br />
                {errors.category && (
                  <small className="text-red-500">{errors.category}</small>
                )}
              </div>





              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="rating" className="">
                  Rating :
                </label>
                <small>
                  <Field
                    type="number"
                    className="border pl-2 p-2 w-full rounded-md"
                    name="rating"
                    placeholder="Add Rating"
                  />
                </small>
                <br />
                {errors.rating && (
                  <small className="text-red-500">{errors.rating}</small>
                )}
              </div>





              <div className="mb-3 grid grid-cols-2">
                <label htmlFor="price" className="">
                  price :
                </label>
                <small>
                  <Field
                    type="number"
                    className="border pl-2 p-2 w-full rounded-md"
                    name="price"
                    placeholder="MRP Price"
                  />
                </small>
                <br />
                {errors.rating && (
                  <small className="text-red-500">{errors.rating}</small>
                )}
              </div>




<div className="mb-3 grid grid-cols-2">
                <label htmlFor="offer-price" className="">
                  offer price :
                </label>
                <small>
                  <Field
                    type="number"
                    className="border pl-2 p-2 w-full rounded-md"
                    name="offerPrice"
                    placeholder="Add Offer Price"
                  />
                </small>
                <br />
                {errors.offerPrice && (
                  <small className="text-red-500">{errors.offerPrice}</small>
                )}
              </div>
<div className="mb-3 grid grid-cols-2">
                <label htmlFor="offer-price" className="">
                  offer percentage :
                </label>
                <small>
                  <Field
                    type="number"
                    className="border pl-2 p-2 w-full rounded-md"
                    name="offerPercentage"
                    placeholder="Add Offer Percentage"
                  />
                </small>
                <br />
                {errors.offerPercentage && (
                  <small className="text-red-500">{errors.offerPercentage}</small>
                )}
              </div>




              <div>
                <Field name="image"  component={FileInput} />

                {errors.imageFile && (
                  <small className="text-red-500">{errors.imageFile}</small>
                )}
              </div>





              <br />
              <br />

              <button type="submit" className="bg-blue-500 w-full py-2 text-white rounded-md">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddProduct;
