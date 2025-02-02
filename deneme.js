const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'notanetwork.aternos.me', // Minecraft sunucu IP'si
    port: 25565, // Varsayılan MC portu
    username: 'ChatBot', // Botun kullanıcı adı
});

bot.on('login', () => {
    console.log('Bot giriş yaptı!');
});

bot.on('chat', (username, message) => {
    if (username === 'Yasokral18' && message.startsWith('!yaz ')) {
        const replyMessage = message.slice(5); // "!yaz " kısmını kaldır
        bot.chat(replyMessage); // Mesajı geri gönder
    }
});

bot.on('error', err => console.log('Hata:', err));
bot.on('end', () => console.log('Bot bağlantıyı kaybetti!'));
