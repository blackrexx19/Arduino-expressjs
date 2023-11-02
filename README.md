# Arduino-expressjs

## Run Locally

Clone the project

```bash
  git clone https://github.com/blackrexx19/Arduino-expressjs.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npn run dev
```

## Pastikan Pada perangkat anda terinstall
- Node Js
- Arduino IDE
- Driver USB Serial

## Packet node yang diinstall
- @serialport/parser-readline
- express
- nodemon
- serialport
- socket.io
```bash
npm install @serialport/parser-readline express nodemon serialport secket.io
```
atau clone repo ini dan jalankan
```bash
npm install
```
## Untuk Setting Port pada file server.js 

di sesuaikan dengan port serial pada perangkat anda
```javascript
const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
});
```

- Windows
```javascript
    path: "COM3", (jika yang terbaca COM3")
```
- Linux
```javascript
    " path: "/dev/ttyUSB0", (Jika yang terbaca di linux anda ttyUSB0)
```

Untuk tampilan webnya bisad di edit di

  Folder view > index.html
