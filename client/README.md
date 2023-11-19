# CranSurvey Client

## Usage

### Install

```html
<script src="https://cdn.jsdelivr.net/gh/ocoke/CranSurvey@master/client/dist/csur-client.min.js" type="module"></script>
```

### Use

We use `<csur-client>` tag to render the client.

You'll need to add the tag before the end of `<body>` tag.


```html
<csur-client 
    server=""
    domain=""
    mode=""
    themeColor=""
    id=""
    timeout=""
></csur-client>
```

### Attributes

- `server`: The server URL of CranSurvey. (`https://csur-preview.vercel.app`)
- `domain`: The domain of your website. (`example.com`)
- `mode`: The color mode, `light` or `dark`. (`light`)
- `themeColor`: The theme color of the plugin. (`#006e1c`)
- `id`: The id of the specific survey. (`426dcb52-25b0-4d31-98d2-a3af5c7a25e7`)
- `timeout`: If there is no click/action, close the tab after this time. (ms) (`10000`)