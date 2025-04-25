import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

interface CartStateType {
	cart: IProduct[];
}

export default function Cart() {
	const [totalCart, setTotalCart] = useState<number>(0);
	const { cart } = useSelector((state) => state) as CartStateType;

	useEffect(() => {
		setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);

	return (
		<div>
			{cart && cart.length > 0 ? (
				<div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
					<div className="flex ml-5 order-2 md:order-1">
						<div className="flex flex-col items-start mt-14">
							{cart.map((item) => (
								<CartTile cartItem={item}></CartTile>
							))}
						</div>
					</div>
					<div className="flex mx-5 order-1 md:order-2 shrink-0">
						<div className="flex flex-col items-start md:items-end space-y-5 mt-14">
							<h1 className="font-bold text-lg text-red-800">
								Your Cart Summary
							</h1>
							<p>
								<span className="text-gray-800 font-bold">Total items: </span>
								<span>{cart.length}</span>
							</p>
							<p>
								<span className="text-gray-800 font-bold">Total amount: </span>
								<span>{totalCart.toFixed(2)}</span>
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center min-h-[80vh]">
					<div className="min-h-[80h] flex flex-col items-center">
						<h1 className="text-gray-800 font-bold text-xl mb-2">
							Your cart is empty
						</h1>

						<Link to="/">
							<button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
								SHOP NOW
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
