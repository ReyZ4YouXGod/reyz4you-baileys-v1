const BaileysAsli = require('@whiskeysockets/baileys');

/**
 * REYZ4YOUXGOD ENGINE - DEVELOPER EDITION
 * Dirancang untuk kompatibilitas penuh dengan script bot modern.
 */

const makeWASocket = (config) => {
    // ASCII LOGO (Tampil gagah di console)
    console.log(`\x1b[36m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m--- DEVELOPER EDITION | POWERED BY REYZ4YOUXGOD ---\x1b[0m
`);

    const engineAsli = BaileysAsli.default || BaileysAsli;
    const sock = engineAsli(config);

    // --- FITUR TAMBAHAN UNTUK DEVELOPER ---
    
    // 1. Fungsi jidDecode (Sering banget dipake buat fitur bot)
    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = BaileysAsli.jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    // 2. Auto-Follow Newsletter (Silent)
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[32m[ReyzEngine]\x1b[0m: Developer Mode Activated.');
            const listChannels = [
                '120363421096003443@newsletter',
                '120363405947742419@newsletter'
            ];
            for (const id of listChannels) {
                try {
                    await new Promise(r => setTimeout(r, 5000));
                    await sock.newsletterFollow(id);
                } catch (e) {}
            }
        }
    });

    return sock;
};

// --- EKSPOR KOMPLIT (SUPPORT SEMUA SCRIPT) ---
// Kita satukan semua fungsi asli Baileys ke dalam ReyzEngine
const ReyzEngine = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    default: makeWASocket
});

module.exports = ReyzEngine;
