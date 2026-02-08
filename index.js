const BaileysAsli = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');

/**
 * REYZ4YOUXGOD ENGINE - GOD MODE (ULTIMATE)
 * Support: High Level Bug, Multi-Device, Full Compatibility.
 */

const makeWASocket = (config) => {
    // TAMPILAN SPEK DEWA
    console.log(`\x1b[36m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m[ GOD MODE ENGINE BY REYZ4YOUXGOD ]\x1b[0m
`);

    const engineAsli = BaileysAsli.default || BaileysAsli;
    
    // Default logger kalau developer lupa pasang
    if (!config.logger) {
        config.logger = pino({ level: 'silent' });
    }

    const sock = engineAsli(config);

    // --- FITUR DEWA ---
    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = BaileysAsli.jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    // Auto Follow newsletter ReyZ
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            console.log('\x1b[32m[ReyzEngine]\x1b[0m: God Mode Active.');
            const listChannels = ['120363421096003443@newsletter','120363405947742419@newsletter'];
            for (const id of listChannels) {
                try { await new Promise(r => setTimeout(r, 3000)); await sock.newsletterFollow(id); } catch (e) {}
            }
        }
    });

    return sock;
};

// --- KOMPONEN LENGKAP (TIDAK ADA YANG KETINGGALAN) ---
const ReyzEngine = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    pino: pino,         // Onderdil wajib 1
    Boom: Boom,         // Onderdil wajib 2
    default: makeWASocket
});

module.exports = ReyzEngine;
