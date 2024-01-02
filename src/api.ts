import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	sql: string;
	bindings?: any;
};

export default defineOperationApi<Options>({
	id: 'sql-query',
	handler: async ({ sql, bindings }, { database: knex }) => {
		const result = await knex.raw(
			sql,
			bindings
		);
		return JSON.parse(
			JSON.stringify(result)
		);
	},
});
