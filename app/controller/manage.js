import { Controller } from "beidou";

export default class ManageController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("manage");
  }

  async login() {
    const { ctx } = this;
    const { success } = ctx.helper;
    const res = {
      token: "chds12jsd#jsdf%jfsdf",
      authority: 'admin'
    };
    success({ ctx, res });
  }

  async account() {
    const { ctx } = this;
    const { success } = ctx.helper;
    const res = {
      name: "Serati Ma",
      avatar:
        "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
      userid: "00000001",
      email: "antdesign@alipay.com",
      notifyCount: 12,
      unreadCount: 11,
      country: "China",
      geographic: {
        province: { label: "浙江省", key: "330000" },
        city: { label: "杭州市", key: "330100" }
      },
      address: "西湖区工专路 77 号",
      phone: "0752-268888888",
      menuData: [
        {
          key: "0",
          name: "系统管理",
          icon: "desktop",
          path: "/system",
          auth: 15,
          children: [
            {
              key: "0-0",
              name: "用户管理",
              auth: 15,
              path: "/manage/system/user"
            },
            {
              key: "0-1",
              name: "角色管理",
              auth: 15,
              path: "/manage/system/role"
            },
            {
              key: "0-2",
              name: "权限管理",
              auth: 15,
              path: "/manage/system/auth"
            },
            {
              key: "0-3",
              name: "菜单管理",
              auth: 15,
              path: "/manage/system/menu"
            }
          ]
        },
        {
          key: "1",
          name: "内容管理",
          icon: "appstore",
          path: "/content",
          children: [
            {
              key: "1-0",
              name: "分类列表",
              path: "/manage/chart/flow"
            },
            {
              key: "1-1",
              name: "新闻资讯",
              path: "/manage/chart/mind"
            }
          ]
        },
        {
          key: "2",
          name: "商品管理",
          icon: "setting",
          path: "/manage/shoplist"
        }
      ]
    };
    success({ ctx, res });
  }
}
