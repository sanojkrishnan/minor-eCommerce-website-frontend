import { Formik, Form, Field } from "formik";
import React, { useContext, useState } from "react";
import createValidationSchema from "../schema/ValidationSchema";
import productExp from "../API/prodects";
import { MessageContext } from "../Context/StateContext";
import toast from "react-hot-toast";

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
        <img
          className="max-h-15 w-auto"
          src={URL.createObjectURL(form.values[field.name])}
          alt="preview"
          width={150}
        />
      )}
    </div>
  );
};

const initialPrice = {
  price: 0,
  offerPrice: 0,
};

function AddProduct() {
  const { setViewMessage } = useContext(MessageContext);
  const [price, setPrice] = useState(initialPrice);

console.log(price);
  const handleSubmit = async (values, { resetForm }) => {
    if (price.offerPrice < price.price) {
      try {
        const formData = new FormData();
        formData.append("productName", values.productName);
        formData.append("category", values.category);
        formData.append("rating", values.rating);
        formData.append("price", values.price);
        formData.append("offerPrice", values.offerPrice);
        formData.append("offerPercentage", values.offerPercentage);
        if (values.image) formData.append("image", values.image);

        await productExp.post("/add-product", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setViewMessage("Product Is Ready To Sell!");
        toast.success("Product Added Successfully!");
        resetForm();
      } catch (err) {
        console.log(err);
        setViewMessage("Something Went Wrong!");
        toast.error(err.message);
      }
    } else {
      setViewMessage("The price should be larger than offer price");
    }
    console.log(price);
  };

  return (
    <div className=" h-120 w-full flex items-start justify-center ">
      <div className="border-gray-400 z-1 h-auto mt-30 shadow-2xl bg-linear-to-br from-gray-300 to-white p-6 w-100 rounded-lg ">
        <Formik
          initialValues={initialValues}
          validationSchema={createValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, setFieldValue, values }) => (
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
                    value={values.productName}
                    onChange={(e) =>
                      setFieldValue("productName", e.target.value)
                    }
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
                    value={values.category}
                    onChange={(e) => setFieldValue("category", e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="beauty">Beauty Product</option>
                    <option value="clothes">Clothes</option>
                    <option value="home">Home Appliances</option>
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
                    value={values.rating}
                    onChange={(e) =>
                      setFieldValue(
                        "rating",
                        Math.min(5, Math.max(0, Number(e.target.value) || 0))
                      )
                    }
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
                    value={values.price}
                    onChange={(e) => {
                      setPrice(price.price === e.target.value);
                      setFieldValue("price", Number(e.target.value));
                    }}
                  />
                </small>
                <br />
                {errors.price && (
                  <small className="text-red-500">{errors.price}</small>
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
                    value={values.offerPrice}
                    onChange={(e) => {
                      setPrice(price.offerPrice === e.target.value);
                      setFieldValue("offerPrice", Number(e.target.value));
                    }}
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
                    value={values.offerPercentage}
                    onChange={(e) =>
                      setFieldValue("offerPercentage", Number(e.target.value))
                    }
                  />
                </small>
                <br />
                {errors.offerPercentage && (
                  <small className="text-red-500">
                    {errors.offerPercentage}
                  </small>
                )}
              </div>

              <div>
                <Field name="image" component={FileInput} />

                {errors.image && (
                  <small className="text-red-500">{errors.image}</small>
                )}
              </div>

              <br />
              <br />

              <button
                type="submit"
                className="bg-blue-500 w-full py-2 text-white rounded-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddProduct;
