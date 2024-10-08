# Webpage Summarizer

This Node.js script fetches the content of a webpage, extracts the text, and generates a prompt for summarizing the content. The prompt is then copied to your clipboard.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the script.
2. Navigate to the script's directory.
3. Install the required dependencies:

```bash
npm install
```

## Usage

Run the script from the command line, providing the URL of the webpage you want to summarize:

```bash
node summarize-webpage.js -u <url>
```

Replace `<url>` with the actual URL of the webpage.

Example:

```bash
node summarize-webpage.js -u https://example.com/article
```

The script will fetch the webpage content, generate a summarization prompt, and copy it to your clipboard. You can then paste this prompt into a text editor or a language model for further processing.

## Options

- `-u, --url`: The URL of the webpage to summarize (required)
- `-h, --help`: Show help information

## Output

The script will print a message confirming that the prompt has been copied to your clipboard. If an error occurs, it will display an error message.

## Note

This script generates a prompt for summarization. You'll need to use this prompt with a language model or text processing tool to get the actual summary of the webpage content.
