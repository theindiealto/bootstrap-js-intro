# Coding Temple Intro to JavaScript & Bootstrap Website Project

## Author
Regan Frese

---

## Table of Contents
- [Introduction](#introduction)
- [Emulated Website](#emulated-website)
- [Bootstrap Components](#bootstrap-components)
- [JavaScript Functions](#javascript-functions)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

---

## Introduction
This project was built for Coding Temple’s Introduction to JavaScript & Bootstrap module. The assignment required building a multi-page responsive website using HTML, CSS, and Bootstrap, along with a standalone JavaScript file containing 4–5 functional snippets representing future site interactivity.

---

## Emulated Website
The website is inspired by [Pipeline Workspaces](https://pipelineworkspaces.com), a professional coworking space provider that I currently work for. The homepage includes a modern hero section, clean navigation, and professional visuals to emulate the branding and layout of Pipeline’s official site. Pages include:

- **Home** (`index.html`)
- **About** (`about.html`)
- **Contact** (`contact.html`)

---

## Bootstrap Components
This project incorporates several Bootstrap elements to enhance responsiveness and visual design:

- **Navigation Bar**: A responsive navbar with links to all three pages.
- **Carousel**: A rotating image banner on the homepage. *I used the official Bootstrap documentation to learn how to build this, as it was not covered in Coding Temple’s lessons.*
- **Accordion**: An FAQ-style collapsible section. *Also self-taught via the Bootstrap documentation.*
- **Cards**: Structured content containers to organize and present information clearly.
- **Form**: A contact form using multiple input types (text and email).
- **Icons**: Bootstrap Icons were added to buttons and sections for added clarity. *I explored Bootstrap’s icon documentation independently to integrate this feature.*

---

## JavaScript Functions
The `app.js` file contains several functions that simulate future interactive features for the site. These are not yet connected to the HTML but are commented for clarity.

1. Email validation
Purpose: Validates the structure of an email address entered on the "Contact Us" form.

How it works: Checks if the input contains both an "@" symbol and a period (.), which are required for a basic email format.

Example Use:
"john@example.com" returns true
"johnexample.com" returns false

2. List memberships
Purpose: Displays all available coworking membership plans.

How it works: Uses a for loop to iterate through a list of membership types and logs each one to the console.

Future Use: Can be integrated into a dynamic website section to display membership types on the front end.

3. Calculate Tax on Memberships
Purpose: Calculates the total monthly cost of a membership after sales tax.

How it works: Adds an 8.25% tax to the base price and returns the total.

Example Use:
calculateMonthlyCost(299) returns approximately 323.67

4. Location Availability Checker
Purpose: Checks if a specific city has a Pipeline coworking location.

How it works: Searches a list of active cities and returns true or false based on whether the input matches an available location.

Example Use:
"Philly" returns true
"Boston" returns false

---

## Features
- Clean, responsive layout using Bootstrap grid and utility classes
- Multiple pages styled consistently
- Image carousel, accordion for FAQs, and icon-enhanced elements
- JavaScript functions written with real-world utility in mind

---

## Prerequisites
To run this project locally, you'll need:

- A modern web browser (Chrome, Firefox, etc.)
- A text editor (VS Code recommended)

---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/theindiealto/bootstrap-js-intro.git
2. Open the folder in your preferred code editor.

## Usage
1. Open index.html in your web browser to view the homepage.
2. Use the navbar to navigate between Home, About, and Contact pages.
3. View and test form inputs and Bootstrap components.
4. To view JavaScript logic, open app.js in a text editor.