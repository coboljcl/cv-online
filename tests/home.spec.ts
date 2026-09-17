import { test, expect } from "@playwright/test";

test("la página carga con todas las secciones del CV", async ({ page }) => {
	await page.goto("/cv-online/");

	await expect(page).toHaveTitle(/Mainframe/);
	await expect(page.locator("h1")).toContainText("COBOL");
	await expect(page.locator("main section[id]")).toHaveCount(8);
	// Navegación principal con sus 6 ítems (Inicio..Contacto)
	await expect(page.locator("#site-navigation a[data-nav]")).toHaveCount(6);
});

test("el scroll-spy marca la sección activa en desktop", async ({ page }) => {
	await page.goto("/cv-online/");

	const navLink = page.locator("#site-navigation a[data-nav]", { hasText: "Proyectos" });
	await expect(navLink).not.toHaveAttribute("aria-current", "page");

	await page.locator("#proyectos").scrollIntoViewIfNeeded();
	await expect(navLink).toHaveAttribute("aria-current", "page");

	await page.locator("#contacto").scrollIntoViewIfNeeded();
	await expect(page.locator("#site-navigation a[data-nav]", { hasText: "Contacto" })).toHaveAttribute(
		"aria-current",
		"page",
	);
});
