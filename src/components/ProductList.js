import { divide } from "lodash";
import Price from "./single-product/price";

export default function ProductList({ products, title = "", xemThem }) {
  if (products.length == 0) return;
  return (
    // <div className="bg-gray-100">
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
    //     {title ? (
    //       <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
    //         {title}
    //       </h2>
    //     ) : null}
    //     {xemThem ? (
    //       <div className="text-right text-red-800">
    //         <a href={xemThem}>Xem tất cả</a>{" "}
    //       </div>
    //     ) : null}
    //     <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 ">
    //       {products.map((product) => (
    //         <a
    //           key={product.id}
    //           href={`/cua-hang/${product?.slug}/`}
    //           className="group"
    //         >
    //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
    //             <img
    //               src={product.image?.sourceUrl}
    //               alt={product.image?.altText}
    //               className="h-full w-full object-cover object-center group-hover:opacity-75"
    //             />
    //           </div>
    //           <h3 className="text-xl text-gray-700 p-2">{product.name}</h3>
    //           <Price
    //             salesPrice={product?.price}
    //             regularPrice={product?.regularPrice}
    //           />
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    // <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    //   <div class="border-b mb-5 flex justify-between text-sm">
    //     <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
    //       <a href={xemThem} class="font-semibold inline-block">
    //         {title}
    //       </a>
    //     </div>
    //     <a href={xemThem}>Xem tất cả</a>
    //   </div>

    //   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    //     {products.map((product) => (
    //       <div class="rounded overflow-hidden shadow-lg flex flex-col">
    //         <a href="#"></a>
    //         <div class="relative">
    //           <a key={product.id} href={`/cua-hang/${product?.slug}/`}>
    //             <img
    //               class="w-full"
    //               src={product.image?.sourceUrl}
    //               alt={product.image?.altText}
    //             />
    //             <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
    //           </a>
    //           <a href={`/cua-hang/${product?.slug}/`}>
    //             <div class="text-xs absolute top-0 right-0 bg-indigo-600  text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
    //               -10%
    //             </div>
    //           </a>
    //         </div>
    //         <div class="px-6 py-4 mb-auto">
    //           <a
    //             href={`/cua-hang/${product?.slug}/`}
    //             class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
    //           >
    //             {product.name}
    //           </a>
    //           <Price
    //             salesPrice={product?.price}
    //             regularPrice={product?.regularPrice}
    //           />
    //         </div>
    //         <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-gray-100">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        {xemThem ? (
          <div class="border-b mb-5 flex justify-between text-sm">
            <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <a href={xemThem} class="font-semibold inline-block">
                {title}
              </a>
            </div>
            <a className="text-red-600" href={xemThem}>
              Xem tất cả
            </a>
          </div>
        ) : null}
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              class="rounded overflow-hidden shadow-lg flex flex-col"
            >
              <a href="#">
                <div class="relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image?.sourceUrl}
                      alt={product.image?.altText}
                      class="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div class="px-1 py-1">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-xl text-gray-700">{product.name}</p>
                    <div class="flex items-center">
                      <Price
                        salesPrice={product?.price}
                        regularPrice={product?.regularPrice}
                      />

                      <div class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
