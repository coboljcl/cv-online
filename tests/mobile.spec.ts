import { test, expect } from "@playwright/test";

// Mobile navigation is the floating scroll-indicator: it advances section by
// section, flips its icon/aria-label at the end, and loops back to the start.
// (The redesigned layout has no hamburger menu: .nav-links is hidden <768px.)
test.describe("navegación móvil (scroll-indicator)", () => {
	test.use({ viewport: { width: 390, height: 844 } });

	test("en móvil el menú de la barra está oculto y el indicador flotante es visible", async ({ page }) => {
		await page.goto("/cv-online/");
		await expect(page.locator(".nav-links")).toBeHidden();
		await expect(page.locator("#scroll-indicator")).toBeVisible();
	});

	test("el indicador avanza de sección y al llegar al final vuelve al inicio", async ({ page }) => {
		await page.goto("/cv-online/");

		const indicator = page.locator("#scroll-indicator");
		await expect(indicator).toHaveAttribute("aria-label", "Ir a la siguiente sección");

		// En el inicio: el icono "next" (chevron) visible, el "home" oculto.
		await expect(indicator.locator('[data-scroll-icon="next"]')).toBeVisible();
		await expect(indicator.locator('[data-scroll-icon="home"]')).toBeHidden();

		// Avanza hasta la última sección dejando asentar el smooth scroll entre
		// clicks (como un usuario real); el bucle corta al llegar al final.
		for (let i = 0; i < 16; i++) {
			await indicator.click();
			await page.waitForTimeout(250);
			if ((await indicator.getAttribute("aria-label")) === "Volver al inicio") break;
		}

		await expect(indicator).toHaveAttribute("aria-label", "Volver al inicio");
		await expect(indicator.locator('[data-scroll-icon="home"]')).toBeVisible();
		await expect(indicator.locator('[data-scroll-icon="next"]')).toBeHidden();

		// Un click más vuelve arriba.
		await indicator.click();
		await page.waitForTimeout(250);
		await expect(indicator).toHaveAttribute("aria-label", "Ir a la siguiente sección");
	});
});
