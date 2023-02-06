export interface NavigationType {
  title: string;
  to: string;
  children?: [
    {
      title: string;
      to: string;
    },
    {
      title: string;
      to: string;
    }
  ];
}

export const MainNavigations: NavigationType[] = [
  {
    title: "Charter",
    to: "/",
  },
  {
    title: "Event",
    to: "/events",
    children: [
      {
        title: "Create Events",
        to: "/events/create",
      },
      {
        title: "Manage Events",
        to: "/events/my-events",
      },
    ],
  },
  {
    title: "Home",
    to: "/",
  },
  {
    title: "My bookings",
    to: "/",
  },
  {
    title: "My wallet",
    to: "/",
  },
];
