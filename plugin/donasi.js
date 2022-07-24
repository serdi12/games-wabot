let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [089516947204]
│ • Gopay [089516947204]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6289516947204
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
