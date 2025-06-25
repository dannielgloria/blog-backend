const supabase = require('../config/supabase');

const messages = [];

module.exports = (io) => {
  io.on('connection', async (socket) => {
    const email = socket.user.email;
    console.log(`🟢 ${email} conectado`);

    socket.emit('chatHistory', messages);

    socket.on('message', async ({ text, color }) => {
      const { data: userData } = await supabase
        .from('users')
        .select('avatar_url')
        .eq('email', email)
        .single();

      const msg = {
        user: email,
        avatar_url: userData?.avatar_url || '',
        color,
        text,
        timestamp: new Date().toISOString()
      };

      messages.push(msg);
      if (messages.length > 50) messages.shift();

      io.emit('newMessage', msg);
    });

    socket.on('disconnect', () => {
      console.log(`🔴 ${email} desconectado`);
    });
  });
};
