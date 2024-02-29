import React, { Component } from 'react'
import {food,drinks,meatFish} from './Data'
const productContext = React.createContext();
 class ContextApi extends Component {
  state = {
    product:[],
    singleColdDrinks:[],
    goatMeat: [],
    ourFood:food,
    ourDrink:drinks,
    ourAsorted:meatFish,
    carts:[],
    cartsubtotal:0
  
  }
componentDidMount(){
  this.setProduct();
  this.coldDrinks();
  this.meatAndFish();
}
  setProduct = () => {
  let temproraryProduct = [];
  food.forEach(item => {
    const singleItem = {...item}
    temproraryProduct = [...temproraryProduct,singleItem]
  })
   this.setState(() => {
    return {product:temproraryProduct}
   })
  }
  coldDrinks = () => {
    let temproraryDrinks = [];
    drinks.forEach(item => {
      const singleDrinks = {...item}
      temproraryDrinks = [...temproraryDrinks,singleDrinks]
    })
     this.setState(() => {
      return {singleColdDrinks:temproraryDrinks}
     })
    }
    meatAndFish = () => {
      let  temporaryMeat = [];
      meatFish.forEach(meat => {
        const singleMeat = {...meat}
        temporaryMeat = [...temporaryMeat,singleMeat]
      })
      this.setState(() => {
        return {goatMeat: temporaryMeat}
      })
    }
  fooditemId = id => {
    const itermId = this.state.product.find(item => item.id === id);
  return itermId;
 }
 drinkitemId = id => {
  const itermId = this.state.singleColdDrinks.find(item => item.id === id);
return itermId;
}
meatitemId = id => {
  const itermId = this.state.goatMeat.find(item => item.id === id);
return itermId;
}
  sendFoodToCart = (id) => {
 const addFood = [...this.state.product];
 const index = addFood.indexOf(this.fooditemId(id));
 const foodProduct = addFood[index];

 foodProduct.inCart = true;
 foodProduct.count = 1;
 const price = foodProduct.price;
 foodProduct.total = price;
  this.setState(() => {
    return {product:addFood,carts:[...this.state.carts,foodProduct]}
  },() => {
    this.addTotal();
  })
  }
  sendMeatToCart = (id) => {
    const addMeat = [...this.state.goatMeat];
    const index = addMeat.indexOf(this.meatitemId(id));
    const meatProduct = addMeat[index];

    meatProduct.inCart = true;
    meatProduct.count = 1;
    const price = meatProduct.price;
    meatProduct.total = price;
    this.setState(() => {
    return {goatMeat:addMeat,carts:[...this.state.carts,meatProduct]}
  },() => {
    this.addTotal();
  })
    }
    sendDrinksToCart = (id) => {
      const addDrink = [...this.state.singleColdDrinks];
      const index = addDrink.indexOf(this.drinkitemId(id));
      const drinkProduct = addDrink[index];
  
      drinkProduct.inCart = true;
      drinkProduct.count = 1;
      const price = drinkProduct.price;
      drinkProduct.total = price;
      this.setState(() => {
      return {singleColdDrinks:addDrink,carts:[...this.state.carts,drinkProduct]}
    },() => {
      this.addTotal();
    })
      }
      decrease = (id) => {
        const inCrease = [...this.state.carts];
        const indexWork = inCrease.find(item => item.id === id);
        const index = inCrease.indexOf(indexWork);
        const product = inCrease[index];
       
        product.count = product.count -1;
        if(product.count === 0){
          this.remove(id)
        }else{
          product.total = product.count * product.price;
          this.setState(() => {
          return{carts:[...inCrease]}
        },() => {
          this.addTotal();
        }) 
        }
      }
      increase = (id) => {
       const inCrease = [...this.state.carts];
       const indexWork = inCrease.find(item => item.id === id);
       const index = inCrease.indexOf(indexWork);
       const product = inCrease[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        
        this.setState(() => {
          return{carts:[...inCrease]}
        },() => {
          this.addTotal();
        })
      }
      remove = (id) => {
        const removeFood = [...this.state.product];
        const removeDrinks = [...this.state.singleColdDrinks];
        const removeMeat = [...this.state.goatMeat];
        const inCrease = [...this.state.carts];
        const remove = inCrease.filter(value => value.id !== id);
    

       
        const foodindex = removeFood.indexOf(this.fooditemId(id));
        const drinkindex = removeDrinks.indexOf(this.drinkitemId(id));
        const meatindex = removeMeat.indexOf(this.meatitemId(id));

        const productFood = removeFood[foodindex];
        const productDrink = removeDrinks[drinkindex];
        const productMeat = removeMeat[meatindex];
       
         if(productFood){
          productFood.count = 0;
          productFood.inCart = false;
          productFood.total = 0
         }
         if(productDrink){
          productDrink.count = 0;
          productDrink.inCart = false;
          productDrink.total = 0
         }
        if(productMeat){
         productMeat.count = 0;
         productMeat.inCart = false;
         productMeat.total = 0;
        }

       this.setState(() => {
        return {
          carts:[...remove],
          product:[...removeFood],
          singleColdDrinks:[...removeDrinks],
          goatMeat:[...removeMeat]
        }
       },() => {
        this.addTotal();
       })
       }
        addTotal = () => {
          let subTotal = 0;
          this.state.carts.map(item => (subTotal += item.total));
          this.setState(() => {
        return {
          cartsubtotal:subTotal,
        }
        })
      }
      clear = () => {
        this.setState(() => {
          return {carts:[]}
        }, ()=>{
         this.addTotal();
         this.setProduct();
         this.coldDrinks();
         this.meatAndFish()
        })
      }
  render() {
    return (
     <productContext.Provider value = {{
     ...this.state,
     sendFoodToCart: this.sendFoodToCart,
     sendMeatToCart: this.sendMeatToCart,
     sendDrinksToCart: this.sendDrinksToCart,
     decrease: this.decrease,
     increase: this.increase,
     remove: this.remove,
     addTotal: this.addTotal,
     clear: this.clear

   }}>
      {this.props.children}
     </productContext.Provider>
    )
  }
}
const ConsumerProvider = productContext.Consumer;
export {ContextApi,ConsumerProvider}