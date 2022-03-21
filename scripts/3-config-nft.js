import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
	"0xA92f68692982e91CA5cEB6400F8c98FBDf6C4738",
);

(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: "Sheep",
				description: "This NFT will give you access to the SheepDAO",
				image: readFileSync("scripts/assets/sheepDAONFT.png"),
			},
		]);
		console.log("✅ Successfully created a new NFT in the drop!");
	} catch (error) {
		console.error("failed to create the new NFT", error);
	}
})()