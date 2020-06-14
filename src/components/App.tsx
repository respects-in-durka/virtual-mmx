import React from "react";
import { ProgrammingWheel } from "./programEditor/ProgrammingWheel";
import { TransportControls } from "./transport/TransportContols";
import { MockupLayout } from "./mockupLayout/MockupLayout";
import { observer } from "mobx-react";
import { Vibraphone } from "./vibraphone/Vibraphone";
// import { SpringTesting } from "./testing/SpringTesting";
// import { TimingTesting } from "./timingTesting/TimingTesting";

export const App = observer(() => {
	return (
		<>
			<MockupLayout />
			{/* <SpringTesting /> */}
			<div style={{ transform: "translate(78px, 82px)" }}>
				<ProgrammingWheel />
				<TransportControls />
			</div>
			<div style={{ transform: "translate(100px, 110px)" }}>
				<Vibraphone />
			</div>
		</>
	);
});
