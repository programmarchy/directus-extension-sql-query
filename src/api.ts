import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	sql: string;
	bindings?: any;
};

export default defineOperationApi<Options>({
	id: 'sql-query',
	handler: ({ sql, bindings }, { database: knex }) => {
		return knex.raw(
			sql,
			bindings
		);
	},
});
