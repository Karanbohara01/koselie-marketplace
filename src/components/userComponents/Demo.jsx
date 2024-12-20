import React from "react";

const Demo = () => {
  return (
    <div className="bg-red-100 bg-gradient-to-r from-red-800 to-red-300 min-h-screen text-white">
      {/* Main Header Section */}
      <div className="relative bg-red-400 p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Up to <span className="text-5xl text-white">50% off toys</span>
        </h1>
        <p className="text-lg">Shop holiday deals</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Gifts by recipient */}
        <div className="bg-white text-black rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Shop gifts by recipient
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_1x_186x116._SY116_CB543392481_.jpg" />
              <p>For him</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
                alt="For her"
              />
              <p>For her</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
                alt="For kids"
              />
              <p>For kids</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
                alt="For teens"
              />
              <p>For teens</p>
            </div>
          </div>
        </div>

        {/* Gaming Accessories */}
        <div className="bg-white text-black rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Gaming accessories</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                alt="Headsets"
              />
              <p>Headsets</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                alt="Keyboards"
              />
              <p>Keyboards</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                alt="Computer mice"
              />
              <p>Computer mice</p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                alt="Chairs"
              />
              <p>Chairs</p>
            </div>
          </div>
        </div>

        {/* Deals in PCs */}
        <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Deals in PCs</h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
            alt="PC"
            className="mb-2"
          />
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Shop now
          </a>
        </div>

        {/* Delightful Deals */}
        <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">
            Delightful deals for everyone
          </h3>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/HolidayDeals/Fuji_Holiday_deals_Dashboard_card_1X._SY304_CB540780866_.jpg"
            alt="Deals"
            className="mb-2"
          />
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demo;
