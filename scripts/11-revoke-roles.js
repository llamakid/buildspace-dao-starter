import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
	"0x68d44dE0A710d6c38B59F2ce07c92592F5C91485",
);

(async () => {
	try {
		console.log(
			"👀 Roles that exist right now:",
      		await tokenModule.getAllRoleMembers()
		);

		await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
		console.log(
			"🎉 Roles after revoking ourselves",
      		await tokenModule.getAllRoleMembers()
		);
		console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
	} catch (error) {
		console.error("Failed to revoke ourselves from the DAO treasury", error);
	}
})();