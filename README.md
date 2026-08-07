# AddiScan Safety Report

Create a professional static website presentation for a capstone project called AddiScan, a food additive safety scanner. Design this for a LinkedIn audience of recruiters, hiring managers, and software engineers who evaluate technical capstone projects. Use a clean, modern layout with a health and technology aesthetic. Use a color palette built around deep green, white, and charcoal to signal trust and safety. Keep the tone academic and direct. Avoid marketing language, emojis, and filler phrases.

Structure the presentation across the following sections and include a placeholder for a screenshot on each section that would benefit from one.

Section one, title slide. Show the project name AddiScan. Add a one sentence description stating that AddiScan lets a user photograph a food product label and receive a report naming which additives carry documented health risks.

Section two, the problem. State that consumers cannot identify which additives in packaged food carry documented health risks at the point of purchase, because ingredient labels use technical names that most people cannot interpret. Cite that a randomized, double blind, placebo controlled trial published in The Lancet found a statistically significant increase in hyperactivity among children who consumed drinks containing artificial food colors and sodium benzoate. State that a systematic review in Public Health Nutrition found that consumers struggle to locate and interpret technical ingredient language, and that comprehension drops further among lower literacy and lower income populations.

Section three, the solution. Describe the four core features. First, image upload with OCR based text extraction using Tesseract.NET. Second, additive detection that matches extracted text against a curated risk database by name, synonym, and E number. Third, a results interface that returns a plain language report with an overall risk rating. Fourth, user authentication that lets a registered user save scan history. Include a placeholder for a screenshot of the upload and results screens.

Section four, the grading system. Explain that AddiScan scores each additive against seven fixed criteria: carcinogenicity, ban status, allergic and sensitivity reactions, cumulative exposure risk, synthetic or natural origin, effect on children and vulnerable groups, and functional necessity. State that the system draws evidence from IARC carcinogenicity classifications and EFSA safety opinions, and that each additive receives a final score from zero to five mapped to a named risk band. Include a placeholder for a screenshot of a graded additive result.

Section five, architecture. State that the system separates the backend and frontend into distinct layers. The backend runs on ASP.NET Core Web API with a SQLite database accessed through Entity Framework Core. The frontend runs on Blazor Server and communicates with the backend only through HTTP calls, which keeps the design ready for a future mobile client. Include a placeholder for an architecture diagram screenshot.

Section six, security and ethics. State that AddiScan hashes and salts stored passwords with bcrypt. State that the system validates uploaded file type and size before OCR processing runs. State that the database enforces role based access control, and that the application records the source and review date of every additive classification so a user can trace a result back to its origin. Reference GDPR consent and minimization principles and the ACM Code of Ethics.

Section seven, results and status. Summarize the current state of the build. Mention the working OCR pipeline, the populated additive database, the detection logic with full unit test coverage, and the scan history feature. Include a placeholder for a screenshot of the test suite or a demo screen recording thumbnail.

Section eight, closing slide. Restate the project name and its purpose in one sentence. Add a call to view the GitHub repository and connect on LinkedIn. Leave space for contact links.

Use consistent heading styles across every section. Keep each section to no more than four short paragraphs or a short paragraph plus a bulleted list. Do not use dashes, semicolons, or colons in the generated text. Write every sentence in active voice.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://addiscan.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b15fb4f1-5f4b-4d23-80c2-b3faf6172669).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
