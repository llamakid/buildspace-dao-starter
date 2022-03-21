import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
	"0xA92f68692982e91CA5cEB6400F8c98FBDf6C4738",
);

const tokenModule = sdk.getTokenModule(
	"0x68d44dE0A710d6c38B59F2ce07c92592F5C91485",
);

(async () => {
	try {
		const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

		if(walletAddresses.length === 0) {
			console.log(
				"No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
			);
			process.exit(0);
		}

		const airdropTargets = walletAddresses.map((address) => {
			const randomAmount = Math.floor(Math.random() * (10000 - 1000 +1) + 1000);
			console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

			const airdropTarget = {
				address,
				amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
			};

			return airdropTarget;
		});

		console.log("🌈 Starting airdrop...");
		await tokenModule.transferBatch(airdropTargets);

	} catch (err) {
		console.error("Failed to airdrop tokens", err);
	}
})();