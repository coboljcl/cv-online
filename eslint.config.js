import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
	{
		ignores: [
			"dist/**",
			".astro/**",
			"node_modules/**",
			"public/**",
			"odd/**",
			"openspec/**",
			"referencias/**",
			".github/**",
			".vscode/**",
			"package-lock.json",
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// typescript-eslint covers .ts and the <script>/frontmatter of .astro
			// (parsed as TypeScript), so the base rule would only double-report.
			"no-unused-vars": "off",
			// Also flag unused `catch (err)` bindings (was the case in Contact.astro);
			// underscore-prefixed names are allowed as intentional placeholders.
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ caughtErrors: "all", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
		},
	},
];
