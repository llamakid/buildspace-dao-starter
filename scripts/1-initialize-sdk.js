import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Importing and configuing our .nv file
import dotenv from "dotenv";
dotenv.config();

// Some quick checks to make sure .env is working
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
	console.log("🛑 Private key not found.");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == "") {
	console.log("🛑 Alchemy API URL not found.");
}

if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
	console.log("🛑 Wallet address not found.");
}

const sdk = new ThirdwebSDK(
	new ethers.Wallet(
		// Your wallet private key. ALWAYS keep private, NEVER share
		process.env.PRIVATE_KEY,
		// RPC URL, we will use Alchemy API URL from our .env file
		ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
	),
);

(async () => {
	try {
		const apps = await sdk.getApps();
		console.log("Your app address is:", apps[0].address);
	} catch (err) {
		console.log("Failed to get apps from the sdk", err);
		process.exit(1);
	}
})()

// We are exporting the initalized thirdweb SDK so that we can use it in other scripts
export default sdk;