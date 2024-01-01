import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'sql-query',
	name: 'SQL Query',
	icon: 'database',
	description: 'Execute an SQL query',
	overview: ({ sql, bindings }) => [
		{
			label: 'SQL',
			text: sql,
		},
		...(bindings ? [
			{
				label: 'Bindings',
				text: (typeof bindings === 'string') ? bindings : JSON.stringify(bindings, null, 2),
			}
		] : []),
	],
	options: [
		{
			field: 'sql',
			name: 'SQL',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input-code',
				required: true,
				options: {
					language: 'sql',
					placeholder: 'SELECT * FROM directus_users WHERE status = ?',
					template: 'SELECT * FROM directus_users WHERE status = ?',
				},
			},
		},
		{
			field: 'bindings',
			name: 'Bindings',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
				note: 'Parameters to apply as bindings to the SQL query, specified by <a href="https://knexjs.org/guide/raw.html#raw-parameter-binding" target="_blank">`knex.raw(sql, bindings)`</a>.',
				options: {
					language: 'json',
					placeholder: JSON.stringify(
						[
							'active',
						],
						null,
						2,
					),
					template: JSON.stringify(
						[
							'active',
						],
						null,
						2,
					),
				},
			},
		},
	],
});
