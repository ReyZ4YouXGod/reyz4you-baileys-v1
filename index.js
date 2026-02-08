const BaileysAsli = require('@whiskeysockets/baileys');

// --- 1. FUNGSI UTAMA (ENGINE REYZ) ---
const makeWASocket = (config) => {
    // Logo ASCII Lu
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

    // Panggil mesin socket asli
    const makeBaileysSocket = BaileysAsli.default || BaileysAsli;
    const sock = makeBaileysSocket(config);

    // Fitur Auto Join Channel Lu
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[36m[Reyz4YouXGod]\x1b[0m: Engine Connected!');
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

// --- 2. EXPORT MULTI-FUNGSI (BIAR GAK KOSONG) ---
// Perintah Object.assign ini gunanya buat MENYALIN semua isi Baileys asli
// (Store, Auth, jidDecode, dll) ke dalam library lu.
const finalExport = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    default: makeWASocket
});

module.exports = finalExport;
