# 短網址產生器 URL shortener

<div id="top"></div>
<p>
  <a href="https://github.com/Prysline/" target="_blank">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  </a>
  <a href="https://github.com/Prysline/S5A8_URLshortener/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Prysline/S5A8_URLshortener.svg" />
  </a>
</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>目錄 Table of Contents</summary>
  <ol>
    <li>
      <a href="#關於-about">關於 About</a>
      <ul>
        <li><a href="#特色-Feature">特色 Feature</a></li>
        <li><a href="#截圖-Screenshot">截圖 Screenshot</a></li>
        <li><a href="#建置環境-built-with">建置環境 Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#入門-getting-started">入門 Getting Started</a>
      <ul>
        <li><a href="#前置-prerequisites">前置 Prerequisites</a></li>
        <li><a href="#安裝-installation">安裝 Installation</a></li>
      </ul>
    </li>
    <li><a href="#版權聲明-license">版權聲明 License</a></li>
    <li><a href="#致謝-acknowledgments">致謝 Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 關於 About

一個以 Node.js 和 Express 製作的短網址產生器。
使用了 MongoDB 來儲存資料。

### 特色 Feature

- 產生隨機五位數英數混和的縮址
- 產生過縮址的網站會沿用既有縮址
- 產生的縮址與舊有的縮址不會重複

### 截圖 Screenshot

<div>
  <img alt="index" src="https://github.com/Prysline/S5A8_URLshortener/blob/main/public/images/index.png" style="display: inline-box; width: 12em;">
  <img alt="success" src="https://github.com/Prysline/S5A8_URLshortener/blob/main/public/images/success.png" style="display: inline-box; width: 12em;">
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

### 建置環境 Built With

- [Node.js](https://nodejs.org/) (v14.18.1)
- [Express](https://expressjs.com/)
- [Express-handlebars](https://github.com/express-handlebars/express-handlebars)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [mongoDB](https://www.mongodb.com/) (v4.2.17)
- [mongoose](https://mongoosejs.com/)
- [Robo 3T](https://robomongo.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 入門 Getting Started

### 前置 Prerequisites

如果要使用 `npm run dev` 的指令，需先安裝 [nodemon](https://www.npmjs.com/package/nodemon)。

- nodemon
  ```sh
  npm install -g nodemon
  ```

必須於使用 [mongoDB](https://www.mongodb.com/) + [mongoose](https://mongoosejs.com/) 的環境下執行。

### 安裝 Installation

1. 在要安裝的位置開啟終端機(terminal) clone 專案檔案
   ```sh
   git clone https://github.com/Prysline/S5A8_URLshortener.git
   ```
2. 進入專案資料夾
   ```sh
   cd S5A8_URLshortener
   ```
3. 安裝所需套件
   ```sh
   npm install
   ```
4. 建立種子資料 （須連線 mongoDB 伺服器）
   ```sh
   npm run seed
   ```
5. 使用 Node.js 執行 Express 伺服器（更新檔案時需要另外 ctrl+C 退出 Node.js 環境並重新啟動）
   ```sh
   npm run start
   ```
   或是使用 nodemon 執行 Express 伺服器（會在檔案變更時自動重啟伺服器，需安裝 nodemon）
   ```sh
   npm run dev
   ```
6. 在瀏覽器網址列輸入 `http://localhost:3000/` 瀏覽網站

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## 版權聲明 License

使用 [MIT](https://github.com/Prysline/S5A8_URLshortener/blob/main/LICENSE) License。

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 致謝 Acknowledgments

- [ALPHAcamp](https://tw.alphacamp.co/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [shields IO](https://shields.io/)

<p align="right">(<a href="#top">back to top</a>)</p>
