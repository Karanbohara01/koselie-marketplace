import React from "react";

const Gifts = () => {
  const categories = [
    {
      title: "Gifts for whatever they're into",
      items: [
        {
          name: "Wellness lovers",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4616_HS2_DQC_9_Wellness-Guru_Dec_1H_1x_186x116._SY116_CB540826662_.jpg",
        },
        {
          name: "Style setters",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4617_HS2_DQC_9_Style-Setter_Dec_1H_1x_186x116._SY116_CB540826662_.jpg",
        },
        {
          name: "Home chef",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4618_HS2_DQC_9_For-Home-Chef_Dec_1H_1x_186x116._SY116_CB540826662_.jpg",
        },
        {
          name: "Fitness lover",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4619_HS2_DQC_9_For-Fitness-Buff_Dec_1H_1x_186x116._SY116_CB540835563_.jpg",
        },
      ],
      footerText: "Shop all gifts",
    },
    {
      title: "Have more fun with family",
      items: [
        {
          name: "Outdoor Play Sets",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Playground_sets._SY116_CB558654384_.jpg",
        },
        {
          name: "Learning Toys",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_STEM_toys_or_learning_toys._SY116_CB558654384_.jpg",
        },
        {
          name: "Action Figures",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Action_figure._SY116_CB558654384_.jpg",
        },
        {
          name: "Pretend Play Toys",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Pretend_Play_Toys._SY116_CB558654384_.jpg",
        },
      ],
      footerText: "See more",
    },
    {
      title: "Level up your gaming",
      items: [
        {
          name: "PC gaming",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg",
        },
        {
          name: "Xbox",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NE_GamingWeek_Xbox_v2_1x._SY116_CB558844445_.jpg",
        },
        {
          name: "PlayStation",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SW_GamingWeek_Sony_v2_1x._SY116_CB558844445_.jpg",
        },
        {
          name: "Nintendo Switch",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SE_GamingWeek_Nintendo_v2_1x._SY116_CB558844445_.jpg",
        },
      ],
      footerText: "Shop the latest in gaming",
    },
    {
      title: "Gaming merchandise",
      items: [
        {
          name: "Apparel",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg",
        },
        {
          name: "Hats",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
        },
        {
          name: "Action figures",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg",
        },
        {
          name: "Mugs",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg",
        },
      ],
      footerText: "See more",
    },
  ];

  const CategoryCard = ({ title, items, footerText }) => {
    return (
      <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <p className="text-sm font-medium mt-2 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="text-blue-600 text-sm mt-4 block hover:underline text-center"
        >
          {footerText}
        </a>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          items={category.items}
          footerText={category.footerText}
        />
      ))}
    </div>
  );
};

export default Gifts;
