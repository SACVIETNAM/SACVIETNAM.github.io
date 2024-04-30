import { IProduct } from "../../models/DataModel";
import DiscountPrice from "../../components/DiscountPrice";
import { Button, Image } from "antd";
import { LangContext } from "../../contexts/LangContext";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const ProductInfo = ({ product }: { product: IProduct }) => {
	const [index, setIndex] = useState<number>(0);
	const { trans } = useContext(LangContext);
	const { user } = useContext(GlobalContext);
	return (
		<div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
			{/* Product image */}
			<div className="inline-grid grid-cols-8 gap-2 ">
				<div className="flex flex-col w-full col-span-1 gap-2">
					{product?.images.map((image: string, i: number) => (
						<img
							src={image}
							key={i}
							className={`w-full object-cover ${
								index === i ? "opacity-70" : ""
							}`}
							onMouseEnter={() => setIndex(i)}
						/>
					))}
				</div>
				<div className="col-span-7">
					<Image
						src={product?.images[index]}
						className="object-cover w-full"
						placeholder={
							<Image
								preview={false}
								src="https://placehold.co/600x400"
								width={200}
							/>
						}
					/>
				</div>
			</div>

			{/* Product information */}
			<div>
				<h2 className="text-2xl font-bold">{product.name}</h2>
				<DiscountPrice discount={product.discount} price={product.price} />
				<p className="mt-4">
					<span className="font-semibold">
						{trans({ en: "Description", vi: "Mô tả" })}:
						<br />
					</span>
					{product.description}
				</p>
				<div className="mt-10">
					{!user && (
						<span className="text-sm italic text-red-400">
							{trans({
								en: "Please log in to place an order!",
								vi: "Hãy đăng nhập để có thể đặt mua!",
							})}
						</span>
					)}
					<Button
						size="large"
						block
						type="primary"
						className=" bg-primary"
						icon={<PlusCircleOutlined />}
						disabled={!user}
					>
						{trans({ en: "Add to cart", vi: "Thêm vào giỏ hàng" })}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
