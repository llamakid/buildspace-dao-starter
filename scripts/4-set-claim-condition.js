import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
	"0xA92f68692982e91CA5cEB6400F8c98FBDf6C4738",
);

(async () => {
	try {
		const claimConditionFactory = bundleDrop.getClaimConditionFactory();

		// Specify cionditions
		claimConditionFactory.newClaimPhase({
			startTime: new Date(),
			maxQuantity: 50_000,
			maxQuantityPerTransaction: 1,
		});

		await bundleDrop.setClaimCondition(0, claimConditionFactory);
		console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
	} catch (error) {
		console.error("Failed to set claim condition", error);
	}
})()