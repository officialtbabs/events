interface ShuttlersRouteStructure {
  name: string;
  path: string;
  title?: string;
}

export interface ShuttlersRouteLayout {
  home: {
    root: ShuttlersRouteStructure;
  };
  events: {
    root: ShuttlersRouteStructure;
  };
}
