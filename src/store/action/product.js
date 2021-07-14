import {
  PRODUCT_FETCH_START,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
} from "./actionType";

const product = [
  {
    id: 1,
    name: "OnePlus 8T Joy Bundle",
    price: "12",
    cut_price: "20",
    discount: "30%",
    img: "https://images-na.ssl-images-amazon.com/images/I/71cxfqBoTgL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Xiaomi Redmi K20",
    price: "17",
    cut_price: "29",
    discount: "39%",
    img: "https://www.91-img.com/pictures/134177-v9-xiaomi-redmi-k20-mobile-phone-large-1.jpg?tr=q-60",
  },
  {
    id: 3,
    name: "Iphone 12 pro max",
    price: "15",
    cut_price: "23",
    discount: "32%",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
  },
  {
    id: 4,
    name: "Litio T-shirt",
    price: "20",
    cut_price: "40",
    discount: "50%",
    img: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
  },
  {
    id: 5,
    name: "Ladies Fashion Shirts",
    price: "29",
    cut_price: "70",
    discount: "69%",
    img: "https://3.imimg.com/data3/VC/UV/GLADMIN-10610/ladies-fashion-shirts-500x500.jpg",
  },
  {
    id: 6,
    name: "Sparx shoes",
    price: "19",
    cut_price: "29",
    discount: "38%",
    img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/9/24/f656f21e-7003-4b9b-b235-469cc9a1ce1d1569303201982-1.jpg",
  },

  {
    id: 7,
    name: "OnePlus 8T Joy Bundle",
    price: "12",
    cut_price: "20",
    discount: "30%",
    img: "https://images-na.ssl-images-amazon.com/images/I/71cxfqBoTgL._SL1500_.jpg",
  },
  {
    id: 8,
    name: "Xiaomi Redmi K20",
    price: "17",
    cut_price: "29",
    discount: "39%",
    img: "https://www.91-img.com/pictures/134177-v9-xiaomi-redmi-k20-mobile-phone-large-1.jpg?tr=q-60",
  },
  {
    id: 9,
    name: "Iphone 12 pro max",
    price: "13",
    cut_price: "25",
    discount: "39%",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000",
  },
  {
    id: 10,
    name: "Litio T-shirt",
    price: "22",
    cut_price: "40",
    discount: "48%",
    img: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
  },
];

const productFetchStart = () => {
  return {
    type: PRODUCT_FETCH_START,
  };
};

const productFetchSuccess = (data) => {
  return {
    type: PRODUCT_FETCH_SUCCESS,
    payload: data,
  };
};
const productFetchFail = (error) => {
  return {
    type: PRODUCT_FETCH_FAIL,
    payload: error,
  };
};

export const productFetch = () => async (dispath) => {
  dispath(productFetchStart());
  try {
    const res = product;
    dispath(productFetchSuccess(res));
  } catch (err) {
    dispath(productFetchFail(err));
  }
};
