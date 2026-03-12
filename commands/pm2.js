const { SlashCommandBuilder } = require('discord.js');
const logger = require('../utils/logger');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pm2')
        .setDescription('see dev dashboard link'),

        async execute(interaction) {
            await interaction.reply('pm2 dashboard [here](https://app.pm2.io/bucket/68a47f8e5c8ecb404596fde2/backend/overview/servers)'); // change to your if using
            await interaction.reply({content: "-# dev only",
                                    ephemeral: true});
            // logging
            try {

                await logger.log('pm2', interaction.user, {
                    response: 'pm2 dashboard [here](https://app.pm2.io/bucket/68a47f8e5c8ecb404596fde2/backend/overview/servers) -# dev only' // change here too
                })
            } catch (error) {
                console.error('Error logging pm2 command:', error);
                await interaction.followUp('There was an error logging the pm2 command.');
            }
        }
}
