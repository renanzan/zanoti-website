import { NextComponentType } from "next";
import Image from "next/image";

import * as S from "./styles";

const MyPhoto: NextComponentType = () => {
	return (
		<S.Root>
			<S.FloatingSphere
				x="-30px"
				y="50%"
				z={3}
				speed={11}>
				<Image
					src="/assets/icons/node-js.svg"
					height="40px"
					width="40px" />
			</S.FloatingSphere>

			<Image
				src="/assets/images/photo.png"
				layout="fill"
				style={{ zIndex: 2 }}
				priority
				quality={100} />

			<S.FloatingSphere
				x="calc(100% - 80px)"
				y="calc(100% - 80px)"
				z={4}
				speed={9}>
				<Image
					src="/assets/icons/react-js.svg"
					height="64px"
					width="64px" />
			</S.FloatingSphere>

			<S.FloatingSphere
				x="calc(100% - 60px)"
				y="-20px"
				z={1}
				speed={8}>
				<Image
					src="/assets/icons/ts.svg"
					height="32px"
					width="32px" />
			</S.FloatingSphere>

			<S.FloatingSphere x="-25px" y="20px" z={2} speed={10} />
			<S.FloatingBlueSphere x="calc(100% + 32px)" y="calc(100% - 96px)" speed={11} />
			<S.ShadowBall />
		</S.Root>
	);
}

export default MyPhoto;