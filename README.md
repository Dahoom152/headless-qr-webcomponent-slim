# headless-qr-webcomponent

A simple web component for QR code generation forked from ahmetozantekin's [headless-qr-webcomponent](https://github.com/ahmetozantekin/headless-qr-webcomponent) and using Rich Harris's [headless-qr](https://github.com/Rich-Harris/headless-qr)

#### Usage

```html
<head>
  <script defer src="/path/to/wc-headless-qr.js"></script>
</head>
  
<body>
  <headless-qr
    url="https://test.com"
    color="#717171"
    background="#f1f1f1"
    size="250px"
    output="svg"
  ></headless-qr>
</body>
```

#### Props

| name       |    type     | default |
| ---------- | :---------: | ------- |
| url        |   string    |         |
| background |   string    | #FFFFFF |
| color      |   string    | #000000 |
| size       |   string    | 250px   |
| output     | svg or html | svg     |

#### Preview
[demo](https://headless-qr-webcomponent.vercel.app/)

