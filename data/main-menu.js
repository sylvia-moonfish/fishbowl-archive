import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const MainMenu = {
  name: "플래티",
  description: "Sylvia Moonfish",
  menuGroups: [
    {
      title: "가이드",
      menus: [
        {
          title: "BiS 가이드",
          icon: (avatarClassName, currentTheme) => {
            return (
              <ListItemAvatar>
                <Avatar
                  alt=""
                  className={avatarClassName}
                  src={
                    currentTheme === "dark"
                      ? "/icons/job-guide.png"
                      : "/icons/job-guide-inv.png"
                  }
                />
              </ListItemAvatar>
            );
          },
          href: "/guide/bis-guide",
        },
        {
          title: "제작 가이드",
          icon: (avatarClassName) => {
            return (
              <ListItemAvatar>
                <Avatar
                  alt=""
                  className={avatarClassName}
                  src="/icons/craft-guide.png"
                />
              </ListItemAvatar>
            );
          },
          href: "/guide/craft-guide",
        },
      ],
    },
  ],
};

export default MainMenu;