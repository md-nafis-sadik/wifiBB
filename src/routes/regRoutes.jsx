import { registerRoutes as routes } from "@/services";

const {
  home,
  registerLayout,
  memberRegistration
} = routes || {};

export const regRoutes = [
  {
    path: registerLayout.path,
    element: registerLayout.element,
    children: [
      {
        path: home.path,
        element: home.element,
      },
      {
        path: memberRegistration.path,
        element: memberRegistration.element,
      }
    ],
  },
];
