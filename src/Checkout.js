import React from "react"
import "./Checkout.css"
import SubTotal from "./SubTotal"
import CheckoutProduct from "./CheckoutProduct"
import useStateValue from "./StateProvider"

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue()


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="display"
                />
                <div>
                    <h3>Hello , {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}