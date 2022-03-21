import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
	"0x22025F1385A094163F56116bF91555C52D99267F",
);

const tokenModule = sdk.getTokenModule(
	"0x68d44dE0A710d6c38B59F2ce07c92592F5C91485",
);

(async () => {
	try {
		await tokenModule.grantRole("minter", voteModule.address);

		console.log(
			"Successfully gave vote module permissions to act on token module"
		  );
	} catch (error) {
		console.error(
			"failed to grant vote module permissions on token module",
			error
		  );
		  process.exit(1);
	}

	try {
		const ownedTokenBalance = await tokenModule.balanceOf(
			process.env.WALLET_ADDRESS
		);

		const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
		const percent90 = ownedAmount.div(100).mul(90);

		await tokenModule.transfer(
			voteModule.address,
			percent90
		);

		console.log("✅ Successfully transferred tokens to vote module");
	} catch (err) {
		console.error("failed to transfer tokens to vote module", err);
	}
})();