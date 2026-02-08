const BaileysAsli = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const chalk = require('chalk');

/**
 * REYZ4YOUXGOD ENGINE - THE ULTIMATE MIRROR
 * Built for high-level developers and bug-shifters.
 */

// 1. Definisikan makeWASocket versi Lu (Branded)
const makeWASocket = (config) => {
    // Tampilan Gagah Pas Bot Nyala
    console.log(chalk.cyan(`
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     --- REYZ4YOUXGOD ENGINE v1.0.11+ [ULTIMATE] ---
`));

    const engineAsli = BaileysAsli.default || BaileysAsli;
    const sock = engineAsli(config);

    // -- INTERNAL HELPERS --
    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = BaileysAsli.jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    // Fungsi Relays (Sering dipake pemain bug)
    sock.relySendMessage = async (jid, content, options = {}) => {
        const { generateWAMessageFromContent } = BaileysAsli;
        const message = await generateWAMessageFromContent(jid, content, {
            ...options,
            userJid: sock.user.id
        });
        await sock.relayMessage(jid, message.message, { 
            messageId: message.key.id,
            ...options 
        });
        return message;
    };

    return sock;
};

// 2. EXPORT SEMUA TANPA TERKECUALI
// Kita mapping semua fungsi Baileys ke library lu
const FinalEngine = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    pino: pino,
    Boom: Boom,
    chalk: chalk,
    default: makeWASocket
});

// Pastikan fungsi krusial tersedia langsung
FinalEngine.makeInMemoryStore = BaileysAsli.makeInMemoryStore;
FinalEngine.useMultiFileAuthState = BaileysAsli.useMultiFileAuthState;
FinalEngine.DisconnectReason = BaileysAsli.DisconnectReason;
FinalEngine.jidDecode = BaileysAsli.jidDecode;
FinalEngine.prepareWAMessageMedia = BaileysAsli.prepareWAMessageMedia;
FinalEngine.generateWAMessageFromContent = BaileysAsli.generateWAMessageFromContent;

module.exports = FinalEngine;
