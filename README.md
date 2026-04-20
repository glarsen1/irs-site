# Website Link

https://glarsen1.github.io/irs-site/

# Simple IRS Guide

This project was developed as part of the E-Fólio A assignment for the course *Laboratório de Sistemas e Serviços Web* (UAB - Uiversidade Aberta).

## Purpose

This website was developed with the aim of simulating, in a basic way, the functioning of the IRS (Income Tax) in Portugal, within the scope of E-folio A of the UAB (Universidade Aberta) Web Systems and Services Laboratory course. It is intended to demonstrate the knowledge acquired so far in HTML, CSS, and JavaScript, and as such, I do not, in any way, claim it to be a reliable tool for calculating IRS.

I organized the site's structure into several interconnected pages, including a page (index.html) in the program's root directory that links to the homepage, also in an (index.html) file. For organizational purposes, this file, along with the other HTML files (what-is-irs.html, how-to-fill-out.html, among others), is located in a folder specifically for files with that extension. I developed the code in VSCode and adopted a clear separation between content, presentation, and behavior. HTML was used to structure the information, CSS to define the visual appearance, and JavaScript to implement dynamic functionalities. This approach allows for better code organization, easier maintenance, and component reuse.

From the user's point of view, the site allows for intuitive navigation and a clear division of content by topic, facilitating their experience. I paid special attention to the consistency of the interface, namely through a menu common to all pages and a uniform layout, in order to avoid confusion and improve usability. Additionally, I took into account basic accessibility principles, such as the use of colors with adequate contrast and clear text, in order to make navigation more inclusive.

Among the dynamic features implemented, I highlight the ability to switch between languages ​​(Portuguese and English), the light/dark mode with persistence via localStorage, and an income tax simulator. This simulator includes, in a simplified way, the calculation of tax based on progressive brackets, as well as the application of deductions with maximum limits and the consideration of dependents, thus allowing an estimate of the final amount to be paid. The logic used in the simulator sought to approximate a real model, but simplified, requiring the implementation of chained conditions and validation of data entered by the user.

I also implemented other features for practice, such as CPF validation, a local visitor counter, and image interaction (zoom). The design was conceived to be simple, responsive, and consistent, ensuring good usability across different devices, notably through the use of flexible layouts and CSS media queries.

During development, some challenges arose, particularly in managing state between pages, such as the persistence of the theme and language chosen by the user. This difficulty was overcome through the use of localStorage, allowing preferences to be saved and automatically applied when loading each page. Another significant challenge was the implementation of the simulator, especially in defining income tax brackets and correctly applying deductions with limits, requiring a logically structured approach in JavaScript.

The solutions adopted were progressively refined throughout development, and whenever possible, I opted for reusable and modular approaches, facilitating future improvements and ensuring greater robustness of the application.

References:

Pereira, A., & Poupa, C. (2017). Linguagens Web (6.ª ed.). Lisboa: Sílabo.

W3Schools - https://www.w3schools.com/
MDN Web Docs - https://developer.mozilla.org/

---

## Features

- Informational pages about IRS:
  - What is IRS
  - How to fill
  - Deductions
  - Deadlines

- IRS Simulator:
  - Progressive tax calculation
  - Deduction limits (health, education, housing, others)
  - Dependents support

- Multilingual support:
  - Portuguese 🇵🇹 / English 🇬🇧

- Dark / Light mode:
  - User preference saved with `localStorage`

- Additional features:
  - NIF validation
  - Local visit counter
  - Interactive image zoom

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Project Structure

irs-site/
│
├── index.html
    o-que-e-o-irs.hmtl
    como-preencher.html
    deducoes.html
    prazos.html
    simulador.html
    about.html
    README.md
├── css/ 
├── images/
└──  js/



---

## How to Run

### Option 1 (Recommended)
Open the project using a local server (e.g., Live Server in VSCode)

### Option 2
Open `index.html` directly in a web browser

---

## Disclaimer

This website is an academic project and provides only a simplified simulation of IRS calculations.

---

## References

Pereira, A., & Poupa, C. (2017). Linguagens Web (6.ª ed.). Lisboa: Sílabo.

W3Schools - https://www.w3schools.com/
MDN Web Docs - https://developer.mozilla.org/
