import React from "react";
import CountdownTimer from "../components/timer";

const Clock = () => {
	const startTime = "2024-09-04T06:14:52.505Z";
	const endTime = "2024-09-05T07:44:52.505Z";
	return (
		<div>
			<h1>Countdown Timer</h1>
			<CountdownTimer startTime={startTime} endTime={endTime} />
		</div>
	);
};

export default Clock;
