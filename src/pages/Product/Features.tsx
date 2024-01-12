import { useState } from "react";
import Each from "../../util/Each";
import AnimatedText from "../../components/AnimatedText";
import FeatureItem from "./FeatureItem";
import TCButton from "../../components/TCButton";

import { PiWindDuotone } from "react-icons/pi";
import { MdOutlineMonitorHeart, MdOutlineDesignServices } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { TbFocusAuto } from "react-icons/tb";
import { LuBatteryFull } from "react-icons/lu";
import { FeatureObject } from "../../util/type";

const Features = () => {
	const [showAll, setShowAll] = useState<boolean>(false);

	const toggleShowAll = () => {
		setShowAll(true);
	};

	return (
		<div className="max-w-screen-xl py-8 pb-20 mx-auto mt-20">
			<AnimatedText
				text="Overview of Features"
				className="text-3xl text-center lg:text-4xl font-display text-primary"
			/>

			<div className="flex flex-col items-center justify-center my-4">
				<TCButton label={"Show All"} onPress={toggleShowAll} />
				<p className="mt-2 text-center text-secondary">
					(Press on the features for more details)
				</p>
			</div>
			<div className="flex flex-wrap mt-8">
				<Each
					of={features}
					render={(item, index) => (
						<FeatureItem
							show={showAll}
							className="w-1/2 p-2 md:p-8 md:py-4 md:w-1/3 h-[200px]"
							item={item}
							key={index}
						/>
					)}
				/>
			</div>
		</div>
	);
};

export default Features;

const features: FeatureObject[] = [
	{
		name: "Body Cooling",
		description:
			"With 3 different fan speeds, you won't have to worry about getting hot.",
		Icon: PiWindDuotone,
	},
	{
		name: "Body Temperature & Humidity",
		description:
			"Monitor the temperature and humidity inside your clothing to better protect yourself.",
		Icon: MdOutlineMonitorHeart,
	},
	{
		name: "Smart Design",
		description:
			"It can be disassembled & cleaned and can be paired with various types of clothing, suitable even for those who have to wear uniforms for work.",
		Icon: MdOutlineDesignServices,
	},
	{
		name: "Control via smartphone",
		description:
			"Connect to the phone to monitor body status, device status, and customize the device through Bluetooth.",
		Icon: FaMobileAlt,
	},
	{
		name: "Auto-adjustment",
		description:
			"Based on your body's condition, the device will provide settings tailored to your state.",
		Icon: TbFocusAuto,
	},
	{
		name: "Long battery life",
		description: "Long battery life allows you to work outdoors all day.",
		Icon: LuBatteryFull,
	},
];
