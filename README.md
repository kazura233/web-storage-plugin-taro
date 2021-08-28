<h1 align="center">Welcome to @kazura/web-storage-plugin-taro 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@kazura/web-storage-plugin-taro" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@kazura/web-storage-plugin-taro.svg">
  </a>
  <a href="https://github.com/kazura233/web-storage-plugin-taro/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> web-storage-plugin-taro

### 🏠 [Homepage](https://github.com/kazura233/web-storage-plugin-taro)

## Install

```sh
yarn add @kazura/web-storage @kazura/web-storage-plugin-taro
```

## Usage

```javascript
import WebStorage from '@kazura/web-storage'
import WXStorage from '@kazura/web-storage-plugin-taro'

const storage = new WebStorage(new WXStorage(), 'STORAGE_DEMO', String)

storage.setItem('demo')

storage.getItem()

storage.removeItem()

storage.clear()
```

## Author

👤 **kazura233**

- Website: https://github.com/kazura233
- Github: [@kazura233](https://github.com/kazura233)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kazura233/web-storage-plugin-taro/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
