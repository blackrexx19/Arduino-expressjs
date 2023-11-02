# Arduino-expressjs

Pastikan Pada perangkat anda terinstall
- Node Js
- Arduino IDE
- Driver USB Serial

Packet node yang diinstall
- @serialport/parser-readline
- express
- nodemon
- serialport
- socket.io

npm install @serialport/parser-readline express nodemon serialport secket.io





Untuk Setting Port pada file server.js di sesuaikan dengan port serial pada perangkat anda

const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
});

- Windows
    path: "COM3", (jika yang terbaca COM3")
- Linux
    " path: "/dev/ttyUSB0", (Jika yang terbaca di linux anda ttyUSB0)

  Untuk tampilan webnya bisad di edit di

  Folder view > index.html
