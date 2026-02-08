const BaileysAsli = require('@whiskeysockets/baileys');
const { 
    default: makeBaileysSocket, 
    proto, 
    prepareWAMessageMedia, 
    generateWAMessageFromContent 
} = BaileysAsli;

/**
 * REYZ4YOUXGOD ENGINE - HIGH LEVEL EDITION
 * Optimized for Multi-Device, Bug Scripts, and High-Performance Bots.
 */

const makeWASocket = (config) => {
    // TAMPILAN CONSOLE SPEK TINGGI
    console.log(`\x1b[35m
  _____              ______ _  __     __           __   _____           _ 
 |  __ \\            |___  /| | \\ \\   / /          / /  / ____|         | |
 | |__) |___ _   _ ____/ / | |  \\ \\_/ /__  _   _ / /  | |  __  ___   __| |
 |  _  // _ \\ | | |_  / /  | |   \\   / _ \\| | | / /   | | |_ |/ _ \\ / _\` |
 | | \\ \\  __/ |_| |/ / /___| |____| | (_) | |_| / /    | |__| | (_) | (_| |
 |_|  \\_\\___|\\__, / /_____|______| |_|\\___/ \\__,_/_/      \\_____|\\___/ \\__,_|
              __/ |                                                       
             |___/                                                        
     \x1b[33m[ HIGH LEVEL ENGINE | BUG SUPPORT | BY REYZ4YOUXGOD ]\x1b[0m
`);

    const sock = makeBaileysSocket(config);

    // --- HIGH LEVEL INTERNAL FUNCTIONS ---

    // 1. JID Decoder (Wajib buat dev bot)
    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = BaileysAsli.jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    // 2. High-Level Message Sender (Support Bug/Heavy Content)
    sock.relySendMessage = async (jid, content, options = {}) => {
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

    // 3. Auto Follow (ReyZ Special)
    sock.ev.on('connection.update', async (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log('\x1b[32m[ReyzEngine]\x1b[0m: Connection Stable. High-Level Mode Active.');
            const listChannels = [
                '120363421096003443@newsletter',
                '120363405947742419@newsletter'
            ];
            for (const id of listChannels) {
                try {
                    await new Promise(r => setTimeout(r, 3000));
                    await sock.newsletterFollow(id);
                } catch (e) {}
            }
        }
    });

    return sock;
};

// --- MULTI-LEVEL EXPORT (THE CORE) ---
// Menggabungkan semua fungsi Baileys asli agar tidak ada error di script manapun
module.exports = Object.assign(makeWASocket, BaileysAsli, {
    makeWASocket: makeWASocket,
    default: makeWASocket
});
