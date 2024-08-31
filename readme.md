# Telegram бот работающий с ChatGPT

# Telegram Bot with ChatGPT Integration

Welcome to the Telegram Bot project that integrates with OpenAI's ChatGPT and Google Cloud Text-to-Speech. This bot allows users to interact with ChatGPT by sending text and voice messages. The bot processes voice messages by transcribing them to text and generating a response using ChatGPT. Additionally, the bot can convert ChatGPT's text responses into audio messages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Features

- **Text Interaction**: Users can send text messages to the bot, and it will reply with a generated response from ChatGPT.
- **Voice Interaction**: Users can send voice messages, which will be transcribed and processed by ChatGPT. The bot can also respond with an audio message.
- **Multi-language Support**: Supports multiple languages in text-to-speech conversion.
- **Session Management**: Maintains a session with the user, keeping track of the conversation context.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- [Telegram Bot API Token](https://core.telegram.org/bots#botfather)
- [OpenAI API Key](https://beta.openai.com/signup/)
- [Google Cloud API Key](https://cloud.google.com/text-to-speech)

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
