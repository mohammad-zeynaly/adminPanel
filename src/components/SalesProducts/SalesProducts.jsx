import { useState } from "react";
import useNumberPersian from "../../hooks/useNumberPersian";
import ProgressBar from "../ProgressBar/ProgressBar";

function SalesProducts() {
  const [allProductProgress, setAllProductProgress] = useState([
    {
      id: 1,
      title: "مجموع قیمت",
      price: 4_324,
      progressValue: 20,
      status: " 10% افزایش",
      productStatusClass: "text-primary",
    },
    {
      id: 2,
      title: "مجموع موجودی  ",
      price: 2_214,
      progressValue: 30,
      status: " 14% کاهش",
      productStatusClass: "text-third rotate-180",
    },
  ]);

  return (
    <div className="w-full xl:w-[49%]">
      <div className="bg-white rounded-lg  ">
        <h4 className="border-b p-4 text-2sm font-iranYekanBold">
          فروش محصولات
        </h4>

        <div className="p-4">
          <div className="flex items-center">
            <span className="w-10 h-10 border-2 border-secondary rounded-full flex items-center justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </span>
            <h6 className="text-xl font-iranYekanBold mr-3">
              {useNumberPersian(65_353)}
            </h6>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            {allProductProgress.map((productProgress) => (
              <div key={productProgress.id} className="mt-5 w-full sm:w-[48%]">
                <strong className="text-lg font-iranYekanBold">
                  {useNumberPersian(productProgress.price)}
                  <span className="text-sm pr-2">
                    {" "}
                    {productProgress.title}{" "}
                  </span>
                </strong>

                <ProgressBar
                  progressClass="mt-3"
                  progressValue={productProgress.progressValue}
                  progressColorValue="[&::-webkit-progress-value]:bg-primary"
                />
                <span className="flex items-center">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 ${productProgress.productStatusClass} ml-2`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                  {productProgress.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesProducts;
