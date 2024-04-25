import { isEmpty } from "lodash";

const Price = ({ regularPrice = 0, salesPrice }) => {
  if (isEmpty(salesPrice)) {
    return null;
  }

  /**
   * Get discount percent.
   *
   * @param {String} regularPrice
   * @param {String} salesPrice
   */
  const discountPercent = (regularPrice, salesPrice) => {
    if (isEmpty(regularPrice) || isEmpty(salesPrice)) {
      return null;
    }

    const formattedRegularPrice = parseInt(
      regularPrice?.substring(1).replaceAll(".", "")
    );
    const formattedSalesPrice = parseInt(
      salesPrice?.substring(1).replaceAll(".", "")
    );

    const discountPercent =
      ((formattedRegularPrice - formattedSalesPrice) / formattedRegularPrice) *
      100;

    return {
      discountPercent:
        formattedSalesPrice !== formattedRegularPrice
          ? `-${discountPercent.toFixed(0)}%`
          : null,
      strikeThroughClass:
        formattedSalesPrice < formattedRegularPrice
          ? " text-sm text-gray-600 cursor-auto ml-2 line-through"
          : "text-lg font-semibold text-black cursor-auto my-3 text-red-600",
    };
  };

  const productMeta = discountPercent(regularPrice, salesPrice);

  return (
    // <p className=" lg:text-xl text-lg lg:leading-6 leading-5 font-medium text-gray-900 mt-2">
    //   {/* Regular price */}
    //   {productMeta?.discountPercent ? (
    //     <span className="font-semibold">{salesPrice}</span>
    //   ) : null}

    //   {/* Discounted price */}
    //   <span className={productMeta?.strikeThroughClass}>{regularPrice}</span>
    //   {productMeta?.discountPercent ? (
    //     <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-pink-700 ring-1 ring-inset ring-pink-700/10">
    //       {productMeta?.discountPercent}
    //     </span>
    //   ) : null}
    //   <div class="text-xs absolute top-0 right-0 bg-indigo-600  text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
    //     -10%
    //   </div>
    // </p>
    <>
      {productMeta?.discountPercent ? (
        <span className="text-lg font-semibold text-black cursor-auto my-3 text-red-600">
          {salesPrice}
        </span>
      ) : null}
      <span className={productMeta?.strikeThroughClass}>{regularPrice}</span>

      {/* {" "}
      <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
      <del>
        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
      </del>{" "} */}
      {productMeta?.discountPercent ? (
        <span className="text-xs absolute top-0 right-0 bg-red-200 p-1 text-red-600">
          {productMeta?.discountPercent}
        </span>
      ) : null}
    </>
  );
};

export default Price;
