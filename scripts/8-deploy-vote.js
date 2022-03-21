import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
	"0xEa8b12dd462cEF4838Bcf72C64037F4641E9557d",
);

(async () => {
	try {
		const voteModule = await appModule.deployVoteModule({
			name: "SheepDAO Proposals",

			votingTokenAddress: "0x68d44dE0A710d6c38B59F2ce07c92592F5C91485",

			proposalStartWaitTimeInSeconds: 0,

			proposalVotingTimeInSeconds: 24 * 60 * 60,

			votingQuorumFraction: 0,

			minimumNumberOfTokensNeededToPropose: "0",
		});

		console.log(
			"✅ Successfully deployed vote module, address:",
			voteModule.address,
		);
	} catch(err) {
		console.error("Failed to deploy vote module", err);
	}
})();