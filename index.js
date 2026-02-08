const BaileysAsli = require('@whiskeysockets/baileys');

/**
 * REYZ4YOUXGOD ENGINE - STABLE VERSION
 * Mesin ini dirancang untuk berjalan di semua script bot tanpa error
 */

// 1. Branding & Fitur Auto-Follow
const makeWASocket = (config) => {
    // Logo ASCII (Tampilan di Aspal)
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

    // Panggil mesin socket asli (Default Export Baileys)
    const engineAsli = BaileysAsli.default || BaileysAsli;
    const sock = engineAsli(config);

    // Fitur Tambahan (Auto Follow Newsletter)
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[36m[Reyz4YouXGod]\x1b[0m: Engine active, checking channels...');
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
        }
    });

    return sock;
};

// 2. EXPORT MULTI-FUNGSI (Agar Mesin Bisa Jalan Tanpa Kendala)
// Kita gabungkan fungsi buatan kita dengan SEMUA fungsi bawaan Baileys asli
const ReyzEngine = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    default: makeWASocket
});

module.exports = ReyzEngine;
