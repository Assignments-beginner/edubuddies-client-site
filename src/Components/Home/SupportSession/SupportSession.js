import React from "react";
import AllLiveSupportSessions from "./AllLiveSupportSessions";
import SupportSessionList from "./SupportSessionList";

const SupportSession = () => {
	return (
		<div className='py-5'>
			<AllLiveSupportSessions />
			<SupportSessionList />
		</div>
	);
};

export default SupportSession;
