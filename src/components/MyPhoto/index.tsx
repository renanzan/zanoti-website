import { NextComponentType } from "next";
import Image from "next/image";

import * as S from "./styles";

const MyPhoto: NextComponentType = () => {
	return (
		<S.Root>
			<S.FloatingSphere
				className="left-[-30px] top-[50%] z-[3]"
				speed="11">
				<Image
					src="/assets/icons/node-js.svg"
					height="32px"
					width="32px" />
			</S.FloatingSphere>

			<Image
				src="/assets/images/photo.png"
				layout="fill"
				className="z-[2]"
				quality={100}
				priority />

			<S.FloatingSphere
				className="left-[calc(100%-60px)] top-[calc(100%-60px)] z-[3]"
				speed="9">
				<Image
					src="/assets/icons/react-js.svg"
					height="48px"
					width="48px" />
			</S.FloatingSphere>

			<S.FloatingSphere
				className="left-[calc(100%-54px)] top-[-20px] z-[1]"
				speed="8">
				<Image
					src="/assets/icons/ts.svg"
					height="24px"
					width="24px" />
			</S.FloatingSphere>

			<S.FloatingSphere className="left-[-16px] top-[16px] z-[2]" speed="10" />
			<S.FloatingBlueSphere className="left-[calc(100%+24px)] top-[calc(100%-80px)] z-[2]" speed="11" />
			<S.ShadowBall />
		</S.Root>
	);
}

export default MyPhoto;