import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: [["list"]],
	use: {
		baseURL: "http://localhost:4310/cv-online/",
		trace: "retain-on-failure",
		// Local workaround: the headless-shell download stalls on this network,
		// so point Playwright at the already-downloaded full Chromium binary.
		launchOptions: {
			executablePath: `${process.env.HOME}/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome`,
		},
	},
	webServer: {
		// Always serve the production build: the e2e suite exercises the real
		// dist output, including the CSP meta tag (only present when PROD).
		command: "npm run build && npm run preview -- --port 4310",
		url: "http://localhost:4310/cv-online/",
		reuseExistingServer: false,
		timeout: 120_000,
	},
});
