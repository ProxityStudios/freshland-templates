/**
 * @abstract
 */
exports.Service = class {
	/**
	 * @protected
	 */
	client;

	constructor(client) {
		this.client = client;
	}

	/**
	 * @abstract
	 */
	// eslint-disable-next-line class-methods-use-this, no-empty-function
	async init() {}
};
