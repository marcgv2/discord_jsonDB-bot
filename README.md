# Setup Guide
# Quick Start

## Follow these steps to set up and run your Discord bot:
Prerequisites

> Node.js (version 16.9.0 or higher)
>
> A Discord account with a registered bot application
>
> Basic terminal/command line knowledge
> 
> Basic js knowledge in case of wanting to modify

### 📋 Step-by-Step Installation
## Step 1: Install Node.js

# Download and install the latest LTS version of Node.js from the official website:

# Verify installation:
```bash

`node --version`
`npm --version`

```

## Step 2: Download the Code

# Clone or download the project files to your computer:
```bash

# Using GitHub CLI (recommended)
gh repo clone marcgv2/discord_bot
cd discord_bot

# Or using Git directly:
git clone https://github.com/marcgv2/discord_bot.git
cd discord_bot

# Or download ZIP from GitHub and extract it

```
### Or download ZIP and extract

## Step 3: Install Dependencies

### Navigate to your project directory and install required packages:
```bash

npm install
```

This will install all necessary packages listed in package.json.
- note it uses discord.js 14.24.1 to work correctly, other versions may work but it's not guaranteed
## Step 4: Configure Environment Variables

Create a .env file in the root directory of your project:
bash

## Create the .env file
```
touch .env
```

### Add the following variables to your .env file:
```env

TOKEN=your_bot_token_here
GUILD_ID=your_guild_id_here
```

Where to find these values:

    TOKEN: From Discord Developer Portal

        Go to your application → Bot → Copy token

    GUILD_ID: Your Discord server ID

        Enable Developer Mode in Discord settings

        Right-click your server → Copy ID

## Step 5: Run the Bot

Start your Discord bot with:
```bash

npm start      # Production mode
# or
node index.js  # Direct node execution
```

# Useful Commands
- `npm start` 
  - start the bot in production mode
- `npm run dev` 
  - npm run dev
- `npm list` 
  - Check installed packages.
- `npm audit fix` 	
  - Fix security vulnerabilities.

# Security Notes

- Never share your .env file or bot token
- Add .env to your .gitignore file
- Regularly update dependencies: `npm update`
- Use a process manager like PM2 for production

# Common issues

| Issue                                      | Solution                                                            |
|--------------------------------------------|---------------------------------------------------------------------|
| Bot doesn't respond to commands            | Check if `GUILD_ID` is correct or set to `null` for global commands |
| Getting "Missing Permissions" errors       | Ensure bot has proper permissions in server settings                |
| Node.js version too old                    | Update Node.js using the [installer](https://nodejs.org/) or via package manager       |
| Dependencies not installing                | Run `npm cache clean --force` then retry `npm install`              |


# Important

when running `npm audit fix` do not update discordjs or related packets unless you know what you're doing as it may break the bot

## Attribution Request

Please credit me ([@marcgv2](https://github.com/marcgv2)) if you use or modify this bot. A link to [this repository](https://github.com/marcgv2/discord_jsonDB-bot) would be greatly appreciated.

*Optional*: Contributions (e.g., pull requests) are welcome!

### Official documentation for this specific verson may be found here

[discord.js](https://discord.js.org/docs/packages/discord.js/14.25.1)
