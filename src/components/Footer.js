import React, { useState } from "react";
import Link from "next/link";
import isEmpty from "../validator/isEmpty";
import {
  FB_PAGE_URL,
  INPUT_SECRET,
  INSTAGRAM_PAGE_URL,
  MAILCHIMP_FORM_URL,
  TIKTOK_PAGE_URL,
  YOUTUBE_PAGE_URL,
  ZALO_PAGE_URL,
} from "../../lib/constants";
import ZaloFollowButton from "./zalo/FollowButton";

const Footer1 = ({
  siteSeo: { logo, siteName, homeUrl },
  footerMenu,
  footerMenu2,
}) => {
  const [email, setEmail] = useState("");
  const handleOnChange = async (event) => {
    const { target } = event || {};
    const newValue = !isEmpty(target.value) ? target.value : "";
    setEmail(newValue);
  };
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        <div className="flex flex-col flex-shrink-0">
          <h2 className="text-base font-semibold leading-4 text-secondary font-playfair">
            Thông tin liên hệ
          </h2>
          {/* <div
            className="mt-1 zalo-follow-only-button"
            data-oaid="907870636305349915"
          ></div> */}
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: logo.caption }}
          />
          <ZaloFollowButton />
          <div className="flex items-center gap-x-4 mt-12">
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href="https://www.facebook.com/amycos.vn" target="_blank">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href="https://www.tiktok.com/@lanmycosmetics" target="_blank">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 448 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href="https://www.youtube.com/@lanmycosmetics" target="_blank">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 576 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href={INSTAGRAM_PAGE_URL} target="_blank">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 448 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href={ZALO_PAGE_URL} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89"/></svg>
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a href="/shopee" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7h-16zm4.5 0c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4"/><path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2s-1-1.5-2.5-2s-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1"/></g></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:ml-0 ml-8">
          <h2 className="text-base font-semibold leading-4 text-secondary font-playfair">
            {footerMenu[0]?.name ?? "Footer Menu 1"}
          </h2>
          <ul>
            {footerMenu[0]?.menuItems?.nodes
              ? footerMenu[0].menuItems.nodes.map((menuItem) => (
                  <li
                    key={menuItem.id}
                    className="hover:text-gray-800 text-base leading-4 mt-6 text-gray-500 cursor-pointer"
                  >
                    <Link key={menuItem.id} href={menuItem.path}>
                      <a
                        dangerouslySetInnerHTML={{ __html: menuItem.label }}
                        target="_blank"
                      />
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold leading-4 text-secondary font-playfair">
            {footerMenu2[0]?.name ?? "Footer Menu 2"}
          </h2>
          <ul>
            {footerMenu2[0]?.menuItems?.nodes
              ? footerMenu2[0].menuItems.nodes.map((menuItem) => (
                  <li
                    key={menuItem.id}
                    className="hover:text-gray-800 text-base leading-4 mt-6 text-gray-500 cursor-pointer"
                  >
                    <Link key={menuItem.id} href={menuItem.path}>
                      <a
                        dangerouslySetInnerHTML={{ __html: menuItem.label }}
                        target="_blank"
                      />
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="mt-10 lg:block hidden">
          <form
            action={MAILCHIMP_FORM_URL}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_self"
          >
            <label className="text-xl font-medium leading-5 text-secondary font-playfair">
              Đăng ký email để nhận ưu đãi *
            </label>
            <input
              className="invisible"
              type="text"
              name={INPUT_SECRET}
              tabIndex="-1"
              value=""
              readOnly
            ></input>
            <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
              <input
                type="email"
                value={email}
                onChange={handleOnChange}
                name="EMAIL"
                className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800"
                placeholder="Email"
                required
              />

              <button
                type="submit"
                value="Subscribe"
                className="mr-4 cursor-pointer relative z-40"
              >
                <svg
                  className="fill-current text-gray-800 hover:text-gray-500"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10 lg:hidden">
        <form
          action={MAILCHIMP_FORM_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_self"
        >
          <label className="text-xl font-medium leading-5 text-secondary font-playfair">
            Đăng ký email để nhận ưu đãi *
          </label>
          <input
            className="invisible"
            type="text"
            name={INPUT_SECRET}
            tabIndex="-1"
            value=""
            readOnly
          ></input>
          <div className="flex items-center justify-between border border-gray-800 mt-4">
            <input
              type="email"
              value={email}
              onChange={handleOnChange}
              name="EMAIL"
              required
              className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800"
              placeholder="Nhập email để nhận ưu đãi"
            />
            <button
              type="submit"
              value="Subscribe"
              className="mr-4 cursor-pointer relative z-40"
            >
              <svg
                className="fill-current text-gray-800 hover:text-gray-500"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href={homeUrl} className="hover:underline">
          {siteName}™
        </a>
        . <a className="text-underlinefont-semibold text-gray-900 underline decoration-indigo-500 hover:underline"
          target="_blank"
          href="https://thietke.longwebstudio.net/">Thiết kế website giá rẻ trọn gói</a> cùng{" "}
        <a
          className="text-underlinefont-semibold text-gray-900 underline decoration-indigo-500 hover:underline"
          target="_blank"
          href="https://www.longwebstudio.net/"
        >
          Long Web Studio
        </a>{" "}
        {/* <a
          href="//www.dmca.com/Protection/Status.aspx?ID=f7805dd1-3206-48d2-aed8-564276b49ce5"
          title="DMCA.com Protection Status"
          className="dmca-badge"
        >
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=f7805dd1-3206-48d2-aed8-564276b49ce5"
            alt="DMCA.com Protection Status"
          />
        </a> */}
      </p>
    </div>
  );
};

export default Footer1;
