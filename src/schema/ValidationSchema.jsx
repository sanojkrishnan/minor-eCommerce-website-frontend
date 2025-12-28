import * as Yup from "yup";

const MAX_FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const createValidationSchema = Yup.object({

    productName: Yup.string().required("Please enter product name"),
    category: Yup.string().required("Please select product category"),
    rating: Yup.number().required("Please enter the star rating").min(0, 'Min 0').max(5, 'Max 5'),
    price: Yup.number().required("Please add your price").min(0),
    offerPrice: Yup.number().required("Please add your price").min(0),
    offerPercentage: Yup.number().required("Please add your price").min(0),
    image: Yup.mixed()
      .required("An image is required")
      .test(
        "fileSize",
        "File size is too large (max 5MB)",
        (value) => value && value.size <= MAX_FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported file format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      )
      .test(
        "imageDimensions",
        "Image must be max 1200 x 675",
        (value) => {
          if (!value) return false;

          return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(value);

            img.onload = () => {
              URL.revokeObjectURL(img.src);
              resolve(img.width <= 1200 && img.height <= 675);
            };

            img.onerror = () => resolve(false);
          });
        }
      ),

});


export default createValidationSchema;