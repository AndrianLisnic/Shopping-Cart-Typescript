import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }: { cartItem: IProduct }) {
	const dispatch = useDispatch();

	function handleRemoveFromCart() {
		dispatch(removeFromCart(cartItem.id));
	}

	return (
		<div className="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-400 mt-2 mb-2 rounded-lg space-y-5 md:space-y-0 md:space-x-5">
			<div className="flex flex-col sm:flex-row items-center sm:items-start w-full sm:w-auto space-y-5 sm:space-y-0 sm:space-x-5">
				<img
					src={cartItem?.image}
					alt={cartItem?.title}
					className="h-28 w-28 rounded-lg shrink-0"
				/>
				<div className="ml-5 text-center sm:text-left space-y-2 flex-1 min-w-0 w-[300px]">
					<h1 className="text-xl font-bold text-white truncate">
						{cartItem?.title}
					</h1>
					<p className="font-extrabold text-white">{cartItem?.price}$</p>
				</div>
			</div>
			<button
				onClick={handleRemoveFromCart}
				className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 w-full md:w-[160px]"
			>
				Remove from cart
			</button>
		</div>
	);
}
