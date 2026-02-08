const BaileysAsli = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');

/**
 * REYZ4YOUXGOD ENGINE - THE COMPLETE EDITION
 * Menjamin semua fungsi Baileys asli bisa dipanggil.
 */

const makeWASocket = (config) => {
    // LOGO SANG DEWA
    console.log(`\x1b[36m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m--- REYZ4YOUXGOD ENGINE v1.0.10+ [COMPLETED] ---\x1b[0m
`);

    const engineAsli = BaileysAsli.default || BaileysAsli;
    const sock = engineAsli(config);

    // Helper JID Decode
    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = BaileysAsli.jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    return sock;
};

// --- INI YANG KELUPAAN TADI: EKSPOR SEMUA FUNGSI ---
// Kita gabungkan fungsi utama kita dengan SEMUA properti dari Baileys asli
const FinalEngine = {
    ...BaileysAsli,          // Ini buat narik makeInMemoryStore, useMultiFileAuthState, dll.
    makeWASocket: makeWASocket,
    pino: pino,
    Boom: Boom,
    default: makeWASocket    // Ini buat script yang pake require().default
};

module.exports = FinalEngine;
