// ./app/page.tsx

import {
	FrameContainer,
	FrameImage,
	FrameButton,
	useFramesReducer,
	getPreviousFrame,
	validateActionSignature,
	FrameInput,
} from "frames.js/next/server";

const reducer = (state, action) => ({ count: state.count + 1 });

export default async function Home(props) {
	const previousFrame = getPreviousFrame(props.searchParams);

	return (
		<FrameContainer postUrl="/frames" state={state} previousFrame={previousFrame}>
			<FrameImage>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
					public:"x2dVQryQru...loCaIEH_bc"
				</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">version:"1.0.0"</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
					id:"32_3kOMg_e...mxwcLEftwU"
				</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
					timestamp:1707394669238
				</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">validatorSignatures:</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
					signature:"Q5i693Nl53...0CgmT3c2QA"
				</div>
				<div tw="w-full h-full bg-slate-700 text-white justify-center items-center">deadlineHeight:1363856</div>
			</FrameImage>
			<FrameButton>View TX</FrameButton>
		</FrameContainer>
	);
}
