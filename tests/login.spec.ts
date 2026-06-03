import {test, expect} from "@playwright/test"

test("test-login", async ({page})=>{
    //acceder a l'url
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    //saisir l'email
    await page.locator("#login-email").fill("client@boutique.qa")
    //sasir le mdp
    await page.getByPlaceholder("Votre mot de passe").fill("Client123!")  
    //cliquer sur buttn se connecter 
    await page.getByRole("button",{name:"Se connecter"}).click()
    //verifier la redirection
    await expect(page).toHaveURL("https://api.efi-academy.com/e-commerce-test-api/client/shop.php")
})

test("login-inva", async({page}) => {
    //acceder a l'url
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    //saisir l'email
    await page.locator("#login-email").fill("admin@boutique.qa")
    //sasir le mdp
    await page.getByPlaceholder("Votre mot de passe").fill("Admuin123!")  
    //cliquer sur buttn se connecter 
    await page.getByRole("button",{name:"Se connecter"}).click()
    //verifier le message d'erreur si visible 
    await expect(page.locator("[data-testid = 'form-error']")).toBeVisible()
})