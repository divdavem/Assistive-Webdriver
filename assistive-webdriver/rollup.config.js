/*
 * Copyright 2019 Amadeus s.a.s.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import typescript from "@rollup/plugin-typescript";

export default [
  {
    output: [
      {
        file: "./dist/client/index.js",
        format: "cjs"
      },
      {
        file: "./dist/client/index.mjs",
        format: "esm"
      }
    ],
    input: "./src/client/index.ts",
    external: id => id.startsWith("selenium-webdriver"),
    plugins: [typescript({ module: "esnext", target: "es2017" })]
  },
  {
    output: [
      {
        file: "./dist/server/index.js",
        format: "cjs"
      },
      {
        file: "./dist/server/index.mjs",
        format: "esm"
      }
    ],
    input: "./src/server/index.ts",
    external: [
      "virtualbox-soap",
      "yargs",
      "path",
      "co-body",
      "koa-route",
      "winston",
      "colors/safe",
      "koa",
      "p-queue",
      "http-proxy",
      "request-promise-native",
      "request-promise-native/errors",
      "uuid",
      "ws",
      "fs",
      "stream",
      "pngjs",
      "util",
      "child_process",
      "stream-json",
      "stream-json/streamers/StreamValues",
      "os",
      "net",
      "url"
    ],
    plugins: [typescript({ module: "esnext", target: "es2017" })]
  },
  {
    output: [
      {
        file: "./dist/server/bin.js",
        format: "cjs"
      }
    ],
    input: "./src/server/bin.ts",
    external: ["./index"],
    plugins: [typescript({ module: "esnext", target: "es2017" })]
  },
  {
    output: [
      {
        file: "./dist/tester.js",
        format: "cjs"
      }
    ],
    input: "./src/tester/bin.ts",
    external: [
      "yargs",
      "winston",
      "selenium-webdriver",
      "os",
      "selenium-webdriver/lib/command",
      "http"
    ],
    plugins: [typescript({ module: "esnext", target: "es2017" })]
  }
];
