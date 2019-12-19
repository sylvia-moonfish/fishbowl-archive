import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import BookIcon from "@material-ui/icons/Book";
import InfoIcon from "@material-ui/icons/Info";
import MicIcon from "@material-ui/icons/Mic";
import TheatersIcon from "@material-ui/icons/Theaters";
import ViewListIcon from "@material-ui/icons/ViewList";

import SiteInfo from "./site-info";

const MainMenu = {
  name: "플래티",
  description: "🍟Sylvia🌙Moonfish🐠 「플래티」",
  menuGroups: [
    {
      title: "파이널 판타지 14",
      menus: [
        {
          title: "가이드",
          icon: () => {
            return (
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
            );
          },
          subMenus: [
            {
              title: "초보자 가이드",
              icon: (avatarClassName, currentTheme) => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={
                        SiteInfo.assetsUrl +
                        (currentTheme === "light"
                          ? "/icons/basic-guide-inv.png"
                          : "/icons/basic-guide.png")
                      }
                    />
                  </ListItemAvatar>
                );
              }
            },
            {
              title: "직업별 가이드",
              icon: (avatarClassName, currentTheme) => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={
                        SiteInfo.assetsUrl +
                        (currentTheme === "light"
                          ? "/icons/job-guide-inv.png"
                          : "/icons/job-guide.png")
                      }
                    />
                  </ListItemAvatar>
                );
              }
              //href: '/job-guide'
            },
            {
              title: "던전 가이드",
              icon: avatarClassName => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={SiteInfo.assetsUrl + "/icons/dungeon-guide.png"}
                    />
                  </ListItemAvatar>
                );
              }
            },
            {
              title: "토벌전 가이드",
              icon: avatarClassName => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={SiteInfo.assetsUrl + "/icons/trial-guide.png"}
                    />
                  </ListItemAvatar>
                );
              },
              href: "/guide/trial-guide"
            },
            {
              title: "레이드 가이드",
              icon: avatarClassName => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={SiteInfo.assetsUrl + "/icons/raid-guide.png"}
                    />
                  </ListItemAvatar>
                );
              },
              href: "/guide/raid-guide"
            },
            {
              title: "채집/제작 가이드",
              icon: avatarClassName => {
                return (
                  <ListItemAvatar>
                    <Avatar
                      className={avatarClassName}
                      src={SiteInfo.assetsUrl + "/icons/gather-craft-guide.png"}
                    />
                  </ListItemAvatar>
                );
              },
              href: "/guide/gather-craft-guide"
            }
          ]
        },
        {
          title: "정보/뉴스",
          icon: () => {
            return (
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
            );
          },
          subMenus: [
            {
              title: "인터뷰",
              icon: () => {
                return (
                  <ListItemIcon>
                    <MicIcon />
                  </ListItemIcon>
                );
              }
            },
            {
              title: "레터 라이브",
              icon: () => {
                return (
                  <ListItemIcon>
                    <TheatersIcon />
                  </ListItemIcon>
                );
              }
            },
            {
              title: "기타",
              icon: () => {
                return (
                  <ListItemIcon>
                    <ViewListIcon />
                  </ListItemIcon>
                );
              }
            }
          ]
        }
      ]
    }
  ]
};

export default MainMenu;
