type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

type ArrayValues<T> = T extends Array<infer U> ? U : never;

type PropsOfComponent<T> = T extends React.Component<infer P> ? P : never;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  __REDUX_DEVTOOLS_EXTENSION__?: any;
  loadMockSave?: Function;
  loadMockError?: Function;
}

declare module "*?worker" {
  // Vite exposes a Worker subclass here
  class ViteWorker extends Worker {
    constructor();
  }
  export default ViteWorker;
}

declare module "@changelog" {
  const content: string;
  export default content;
}

declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.json' {
  const value: any;
  export default value;
}

