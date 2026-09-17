import { test, expect } from "@playwright/test";

// The third-party Web3Forms client (which mounts hCaptcha and gatekeeps
// submissions) is stubbed so the e2e run is offline-safe and never depends
// on resolving a real captcha or hitting the real endpoint. Our own form JS
// (fetch → json.success → status message) is what gets exercised.
async function stubWeb3Forms(page: import("@playwright/test").Page) {
	await page.route("**/client/script.js", (route) =>
		route.fulfill({ status: 200, contentType: "application/javascript", body: "" }),
	);
	await page.route("https://api.web3forms.com/submit", (route) =>
		route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) }),
	);
}

test("la validación HTML5 bloquea el envío con campos vacíos", async ({ page }) => {
	await page.goto("/cv-online/");
	const status = page.locator("#form-status");

	await page.locator('#contact-form button[type="submit"]').click();

	// El navegador cancela el submit (campos required) → sin mensaje de estado.
	await expect(status).toBeEmpty();
	await expect(page.locator('#contact-form button[type="submit"]')).toBeEnabled();
});

test("el envío a Web3Forms (mockeado) muestra el mensaje de éxito", async ({ page }) => {
	await stubWeb3Forms(page);
	await page.goto("/cv-online/");

	await page.locator('#contact-form input[name="name"]').fill("Test e2e");
	await page.locator('#contact-form input[name="email"]').fill("test@example.com");
	await page.locator('#contact-form input[name="subject"]').fill("Oportunidad");
	await page.locator('#contact-form textarea[name="message"]').fill("Mensaje de prueba automatizada.");
	await page.locator('#contact-form button[type="submit"]').click();

	await expect(page.locator("#form-status")).toHaveText(/¡Mensaje enviado con éxito!/);
	// El formulario se resetea tras el envío exitoso.
	await expect(page.locator('#contact-form input[name="name"]')).toHaveValue("");
});

test("recorre las secciones usando los accesos directos del hero", async ({ page }) => {
	await page.goto("/cv-online/");
	await page.locator(".hero-cta-secondary").click();
	await expect(page).toHaveURL(/#experiencia/);
});
