const localtunnel = require('localtunnel');

async function start() {
  try {
    const tunnel = await localtunnel({ port: 3000, subdomain: 'newton-tool-repair-demo' });
    console.log('Tunnel active at:', tunnel.url);
    
    tunnel.on('close', () => {
      console.log('Tunnel connection closed. Reconnecting in 3 seconds...');
      setTimeout(start, 3000);
    });

    tunnel.on('error', (err) => {
      console.error('Tunnel error encountered:', err.message);
      tunnel.close();
    });
  } catch (err) {
    console.error('Connection failed, retrying in 5 seconds...', err.message);
    setTimeout(start, 5000);
  }
}

start();
