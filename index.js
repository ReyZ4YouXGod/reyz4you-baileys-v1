const makeBaileysSocket = require('@whiskeysockets/baileys').default;

const makeWASocket = (config) => {
    // ASCII LOGO REYZ4YOUXGOD
    console.log(`\x1b[36m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m--- POWERED BY REYZ4YOUXGOD ENGINE ---\x1b[0m
`);

    const sock = makeBaileysSocket(config);

    // FITUR AUTO JOIN CHANNEL (SILENT)
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[36m[Reyz4YouXGod Baileys Engine]\x1b[0m: System starting...');
            const listChannels = [
                '120363421096003443@newsletter',
                '120363405947742419@newsletter'
            ];
            for (const id of listChannels) {
                try {
                    await new Promise(r => setTimeout(r, 8000));
                    await sock.newsletterFollow(id);
                } catch (e) {}
            }
            console.log('\x1b[36m[Reyz4YouXGod Baileys Engine]\x1b[0m: All systems ready.');
        }
    });

    return sock;
};

module.exports = makeWASocket;
