const dns2 = require('dns2');
const { Packet } = dns2;

const records = {
  'example.local': '192.168.1.10',
};

const server = dns2.createServer({
  udp: true,
  handle: (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    const [question] = request.questions;
    const { name } = question;

    if (records[name]) {
      response.answers.push({
        name,
        type: Packet.TYPE.A,
        class: Packet.CLASS.IN,
        ttl: 300,
        address: records[name],
      });
    }

    send(response);
  }
});

server.listen(5333).then(() => {
  console.log('✅ DNS server running on udp://127.0.0.1:5333');
});
