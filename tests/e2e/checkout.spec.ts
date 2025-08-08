import { test, expect } from "@playwright/test";

test("fluxo básico do checkout", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.fill('input[aria-label="Email"]', "teste@exemplo.com");
  await page.fill('input[aria-label="CPF"]', "123.456.789-09");

  await page.click('label:has-text("Cartão")');
  await page.waitForSelector('select[name="parcelas"]', { state: "visible" });
  await page.selectOption('select[name="parcelas"]', "3");

  await page.click('button:has-text("Finalizar Compra")');

  await expect(page.locator('button[type="submit"]')).toHaveText(
    /Processando/i
  );
});
