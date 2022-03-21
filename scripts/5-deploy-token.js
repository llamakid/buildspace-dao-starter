import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xEa8b12dd462cEF4838Bcf72C64037F4641E9557d");

const bundleDrop = sdk.getBundleDropModule(
	"0xA92f68692982e91CA5cEB6400F8c98FBDf6C4738",
);

(async () => {
	try {
		const tokenModule = await app.deployTokenModule({
			name: "SheepDAO Governance Token",
			symbol: "SHEEP",
		});
		console.log(
			"✅ Successfully deployed token module, address:",
      		tokenModule.address,
		);
	} catch (error) {
		console.error("failed to deploy token module", error);
	}
})();