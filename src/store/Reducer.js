import axios from "axios";

const initialState = {
  counter: 0,
  counterWishlist: 0,
  orderedItem: [],
  wishlistItem: [],
  orderedItemList: [],
  wishlistItemList: [],
  totalPrice: 0,
  totalPriceWish: 0,
  priceexmpl: 0,
  auth: false,
  togleZaModl: false,
  togleZaModlWish: false,
  totalOrderEmailData: []

};
const reducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "INCWish") {
    return {
      ...state,
      counterWishlist: state.counterWishlist + 1
    };
  }
  if (action.type === "DEC") {
    if (state.counter < 1) {
      return {
        ...state,
        counter: 0
      };
    } else {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
  }
  if (action.type === "DECWish") {
    if (state.counterWishlist < 1) {
      return {
        ...state,
        counterWishlist: 0
      };
    } else {
      return {
        ...state,
        counterWishlist: state.counterWishlist - 1
      };
    }
  }
  if (action.type === "COPY") {
    return {
      ...state,
      orderedItem: [...action.value]
    };
  }
  if (action.type === "COPYWish") {
    return {
      ...state,
      wishlistItem: [...action.value]
    };
  }
  if (action.type === "STR") {
    return {
      ...state,
      orderedItemList: state.orderedItemList.concat({
        val: state.orderedItem,
        price: state.orderedItem[3],
        id: Math.random(1000)
      }),
      totalPrice: state.totalPrice + state.orderedItem[3]
    };
  }

  if (action.type === "STRWish") {
    return {
      ...state,
      wishlistItemList: state.wishlistItemList.concat({
        val: state.wishlistItem,
        price: state.wishlistItem[3],
        id: Math.random(1000)
      }),
      totalPriceWish: state.totalPriceWish + state.wishlistItem[3]
    };
  }

  if (action.type === "DEL") {
    const newArrayYy = state.orderedItemList.filter(
      el => el.id !== action.elVal
    );
    const newPrice = action.priceA;
    return {
      ...state,
      orderedItemList: newArrayYy,
      counter: state.counter - 1,
      totalPrice: state.totalPrice - newPrice
    };
  }

  if (action.type === "DELWish") {
    const newArrayYy = state.wishlistItemList.filter(
      el => el.id !== action.elVal
    );
    const newPrice = action.priceA;
    return {
      ...state,
      wishlistItemList: newArrayYy,
      counterWishlist: state.counterWishlist - 1,
      totalPriceWish: state.totalPriceWish - newPrice
    };
  }
  if (action.type === "ADDwishes") {
    const wishesToBeOrdered = state.wishlistItemList;
    return {
      ...state,
      orderedItemList: state.orderedItemList.concat(wishesToBeOrdered),
      counter: state.counter + state.counterWishlist,
      totalPrice: state.totalPrice + state.totalPriceWish,

      totalPriceWish: 0,
      wishlistItemList: [],
      counterWishlist: 0
    };
  }

  if (action.type === "CLSAPY") {
    let tempTogle = state.togleZaModl;
    return {
      ...state,
      togleZaModl: !tempTogle
    };
  }
  if (action.type === "CLSWSHMDL") {
    let tempTogleWish = state.togleZaModlWish;
    return {
      ...state,
      togleZaModlWish: !tempTogleWish
    };
  }
  if (action.type === "RECORD") {
    let importantInfo = [];
    state.orderedItemList.map((x, index) => {
      importantInfo[index] = { name: x.val[1], price: x.val[3] };
    });

    return {
      ...state,
      totalOrderEmailData: [importantInfo, state.totalPrice]
    };
  }
  if (action.type === "LVLORDRS") {
    const leveledOrders = [];
    return {
      ...state,
      counter: 0,
      totalPrice: 0,
      orderedItemList: leveledOrders
    };
  }
  if (action.type === "LOGIN") {
    localStorage.setItem("auth", "true");
    return {
      ...state,
      auth: true
    };
  }
  if (action.type === "LOGOut") {
    localStorage.clear();
    /* localStorage.removeItem("auth");
    localStorage.removeItem("FBtoken");
    localStorage.removeItem("EmailPassToken");
    localStorage.removeItem("GLtoken");
    localStorage.removeItem("acountName");
    localStorage.removeItem("acountPicture"); */

    return {
      ...state,
      auth: false
    };
  }
  if (action.type === "SENDCUSTOMERINFOTODATABASE") {
    axios
      .post(
        "https://emaildataproba.firebaseio.com/OrderData.json",
        action.payload
      )
      .then(response => {
        console.log("Order recorded in database " + response);
      })
      .catch(error =>
        console.log("Error, order not recorded in database " + error)
      );
    return {
      ...state
    };
  }

  return state;
};
export default reducer;
