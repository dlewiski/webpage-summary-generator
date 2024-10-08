#!/usr/bin/env node

import axios from "axios";
import * as cheerio from "cheerio";
import clipboardy from "clipboardy";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

(async () => {
  // Parse command-line arguments
  const argv = yargs(hideBin(process.argv))
    .usage("Usage: $0 -u <url>")
    .option("u", {
      alias: "url",
      describe: "URL of the webpage to summarize",
      type: "string",
      demandOption: true,
    })
    .help()
    .alias("help", "h").argv;

  const url = argv.url;

  try {
    // Fetch the webpage content
    const response = await axios.get(url);
    const html = response.data;

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Extract text content
    const textContent = $("body").text().replace(/\s+/g, " ").trim();

    // Prepare the prompt
    const prompt = `Please perform the following tasks on the provided webpage content:

Summary:

Generate a concise summary (3-5 sentences) capturing the main idea and purpose of the text.
Key Points:

List the top 5-7 key points or takeaways from the text in bullet format.
Ensure each bullet is clear and self-explanatory.
Important Details:

Highlight any crucial data, statistics, dates, or facts mentioned.
Present these details in a separate section for quick reference.
Structure and Clarity:

Organize the output with clear headings for each section (Summary, Key Points, Important Details).
Use bullet points or numbered lists for readability.
Accuracy and Relevance:

Ensure all extracted information is accurate and directly relevant to the main topics.
Avoid including minor details that do not contribute to the overall understanding.
Efficiency:

Present the information in a clear and concise manner to facilitate quick comprehension.
Avoid unnecessary verbosity while maintaining completeness.
Additional Instructions:

Maintain the original context and meaning of the text.
If the text includes sections like introductions, conclusions, or specific arguments, ensure they are appropriately reflected in the summary and key points.
Use neutral language and avoid personal opinions or interpretations.
If coding related, provide the code snippets in a separate section and explain the purpose of each snippet that help illustrate the key points and teachings from this webpage.
 webpage content:\n\n${textContent}`;

    // Copy the prompt to the clipboard
    await clipboardy.write(prompt);

    console.log("The prompt has been copied to your clipboard.");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
