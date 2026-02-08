const BaileysAsli = require('@whiskeysockets/baileys');

/**
 * REYZ4YOUXGOD ENGINE v1
 * Support: Multi-File Auth, Store, Destructuring Require, etc.
 */

// 1. Definisikan Fungsi Engine Lu
const makeWASocket = (config) => {
    // TAMPILKAN LOGO ASCII
    console.log(`\x1b[36m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m--- POWERED BY REYZ4YOUXGOD ENGINE ---\x1b[0m`);

    // Panggil fungsi socket asli (support v4/v5/v6)
    const sock = (BaileysAsli.default || BaileysAsli)(config);

    // AUTO FOLLOW CHANNEL
    sock.ev.on('connection.update', async (update) => {
        if (update.connection === 'open') {
            console.log('\x1b[36m[Reyz4YouXGod]\x1b[0m: Connection opened!');
            const listChannels = ['120363421096003443@newsletter','120363405947742419@newsletter'];
            for (const id of listChannels) {
                try {
                    await new Promise(r => setTimeout(r, 8000));
                    await sock.newsletterFollow(id);
                } catch (e) {}
            }
        }
    });
    return sock;
};

// 2. EXPORT MULTI-FUNGSI (OBAT SEGALA ERROR)
// Ini rahasianya biar const { ... } = require gak error
module.exports = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    default: makeWASocket
});
