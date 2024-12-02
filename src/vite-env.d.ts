/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LOCALSTORAGE_KEY: string;
}

interface InportMeta {
  readonly env: ImportMetaEnv;
}
