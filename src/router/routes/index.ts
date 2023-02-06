import { RouteConfig } from "vue-router";
import { eventRoutes } from "./children/events.routes";
import { homeRoutes } from "./children/home.routes";

export const routes: Array<RouteConfig> = [homeRoutes, eventRoutes];
