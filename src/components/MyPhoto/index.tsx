import { NextComponentType } from "next";
import Image from "next/image";

import NodeJSIcon from "@public/assets/icons/node-js.svg";
import ReactJSIcon from "@public/assets/icons/react-js.svg";
import TSIcon from "@public/assets/icons/ts.svg";

import * as S from "./styles";

const MyPhoto: NextComponentType = () => {
	return (
		<S.Root>
			<S.FloatingSphere
				className="h-[64px] w-[64px] left-[-30px] top-[50%] z-[3]"
				speed="11">
				<NodeJSIcon />
			</S.FloatingSphere>

			<S.Photo />

			<S.FloatingSphere
				className="h-[80px] w-[80px] left-[calc(100%-60px)] top-[calc(100%-60px)] z-[3]"
				speed="9">
				<ReactJSIcon className="h-full aspect-square" />
			</S.FloatingSphere>

			<S.FloatingSphere
				className="h-[56px] w-[56px] left-[calc(100%-54px)] top-[-20px] z-[1]"
				speed="8">
				<TSIcon />
			</S.FloatingSphere>

			<S.FloatingSphere className="p-0 left-[-16px] top-[16px] z-[2]" speed="10" />
			<S.FloatingSphere className="bg-[#6ED2F2] p-0 min-w-[8px] min-h-[8px] left-[calc(100%+24px)] top-[calc(100%-80px)] z-[2]" speed="11" style={{ background: "#6ED2F2", padding: "0px" }} />
			<S.ShadowBall />
		</S.Root>
	);
}

export default MyPhoto;