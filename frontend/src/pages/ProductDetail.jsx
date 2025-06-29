import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleProductDetail from "../components/ProductDetail/SingleProductDetail";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5100/api/products/${productId}`
        );
        if (response.ok) {
          const data = response.json();
          setSingleProduct(data);
        }
      } catch (error) {
        console.log("Sunucu Hatası !");
      }
    };
    getSingleProduct();
  }, [productId]);
  return (
    <>
      <SingleProductDetail singleProduct={singleProduct} />
    </>
  );
};

export default ProductDetail;
