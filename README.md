This is a [Next.js](https://nextjs.org/) project demonstrating how to integrate Next and Redux, still mantaining Static Optimization capabilities. 

## Features

* Next.js with custom Express server
* Redux using next-redux-wrapper
* Static optimization for pages

## Build and Run

To build and run the production version use the command:

```bash
npm start
```

After building, the console should show the following, confirming static optimization is indeed enabled.

```
Creating an optimized production build...
Compiled successfully.
Automatically optimizing pages...

Page                                                           Size     First Load JS
┌ ○ /                                                          629 B          66.4 kB
├   /_app                                                      1.58 kB        65.7 kB
└ ○ /404                                                       3.15 kB        68.9 kB
+ First Load JS shared by all                                  65.7 kB
  ├ static/pages/_app.js                                       1.58 kB
  ├ chunks/0c36e17358b038b8ff76570fee3349a7bc41d713.d336cf.js  6.87 kB
  ├ chunks/2f618b0d5fb6d31877ff8b1a46dc8c0126b796f4.03a7d0.js  10.3 kB
  ├ chunks/framework.934881.js                                 40.3 kB
  ├ runtime/main.022d51.js                                     5.98 kB
  └ runtime/webpack.b65cab.js                                  746 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)


```


