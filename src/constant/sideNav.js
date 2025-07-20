export const SIDE_NAV_ITEMS = [
  {
    section: "Dashboards",
    label: "Dashboards",
    id: "dashboard",
    items: [
      {
        label: "Default",
        icon: "VscPieChart",
        id: "dashboard_default",
        path: "/dashboard",
      },
      {
        label: "eCommerce",
        icon: "FiShoppingBag",
        id: "dashboard_e_commerce",
        path: "/dashboard/ecommerce",
      },
      {
        label: "Projects",
        icon: "IoMdFolderOpen",
        id: "dashboard_projects",
        children: [],
      },
      {
        label: "Online Courses",
        icon: "IoBookOutline",
        id: "dashboard_online_courses",
        children: [],
      },
    ],
  },
  {
    section: "Pages",
    label: "Pages",
    id: "pages",
    items: [
      {
        label: "User Profile",
        icon: "LuBookUser",
        id: "pages_user_profile",
        children: [
          {
            label: "Overview",
            id: "pages_user_profile_overview",
          },
          {
            label: "Projects",
            id: "pages_user_profile_projects",
          },
          {
            label: "Campaigns",
            id: "pages_user_profile_campaigns",
          },
          {
            label: "Documents",
            id: "pages_user_profile_documents",
          },
          {
            label: "Followers",
            id: "pages_user_profile_followers",
          },
        ],
      },
      { label: "Account", id: "pages_account", icon: "PiIdentificationCard" },
      {
        label: "Corporate",
        id: "pages_corporate",
        icon: "PiUsersThreeDuotone",
      },
      { label: "Blog", id: "pages_blog", icon: "PiNotebook" },
      { label: "Social", id: "pages_social", icon: "PiChatsTeardropDuotone" },
    ],
  },
];
