import { expect, type Page } from '@playwright/test';

export type PracticeTab = 'Wiederholen' | 'Nach Thema' | 'Spiele' | 'Chart-Trainer';

/** Öffnet „Üben“ und wählt den Reiter. */
export async function openPractice(page: Page, tab: PracticeTab = 'Wiederholen') {
  await page.goto('/#/practice');
  const button = page.getByRole('tab', { name: tab });
  await button.click();
  await expect(button).toHaveAttribute('aria-selected', 'true');
}

/** Klappt die „Sammlung“ im Fortschritt (Vorschläge, Meilensteine, Bar-Album) auf. */
export async function openCollection(page: Page) {
  const summary = page.locator('.progress-collection > summary');
  await summary.click();
  await expect(page.locator('.progress-collection')).toHaveAttribute('open', '');
}
