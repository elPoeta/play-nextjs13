# play-nextjs13

Playing with next js 13 and experimental app directory

## Instalation

- Using pnpm

  #### Install pnpm

  ```shell
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```

  - Reference

    https://pnpm.io/installation

  #### Create Next app

  ```shell
  pnpm create next-app <my-app>
  ```

  ##### Enable app dir

  ```shell
  mkdir app
  ```

  ##### Next config file <next.config.js>

  ```json
  const nextConfig = {
    experimental: {
    appDir: true,
   },
  }
  ```

### Run

```shell
pnpm run dev
```
