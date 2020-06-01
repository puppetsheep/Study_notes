<template>
  <div id="components-layout-demo-top-side">
    <v-layout>
      <v-header>
        <div class="logo"></div>
        <v-menu theme="dark"
         mode="horizontal"
         :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
      </v-header>
      <v-content :style="{ padding: '0 50px' }">
        <!-- <v-breadcrumb :style="{ margin: '12px 0' }">
          <v-breadcrumb-item>Home</v-breadcrumb-item>
          <v-breadcrumb-item href>List</v-breadcrumb-item>
          <v-breadcrumb-item href>App</v-breadcrumb-item>
        </v-breadcrumb> -->
        <v-layout style="background: #fff; padding: 24px 0;">
          <v-sider :width="200" style="background: #fff">
            <v-menu mode="inline" :data="menuData2"></v-menu>
          </v-sider>
          <v-content :style="{ padding: '0 24px', minHeight: 280 }">
              <router-view></router-view>
          </v-content>
        </v-layout>
      </v-content>
      <v-footer :style="{ textAlign: 'center' }">Ant Design ©2016 Created by Ant UED</v-footer>
    </v-layout>
  </div>
</template>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: #333;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
<script>
export default {
  data() {
    return {
      menuData1: [
        {
          name: "首页",
          icon: "home",
          selected: true,
        //   disabled: true,
          href: "/"
        },
        {
          name: "copy",
          icon: "home",
          // selected: true,
        //   disabled: true,
          href: "/copy"
        },
        {
          name: "安装指南",
          icon: "mail",
          children: [
            {
              href: {
                name: "menu",
                query: {
                  src:
                    "http://test.api.g7s.chinawayltd.com/iframe.html#apilog/index.html"
                }
              },
              name: "快速上手"
            },
            {
              href: "/development",
              name: "开发指南",
              disabled: true
            }
          ]
        },
        {
          name: "基础组件",
          icon: "folder",
          groups: [
            {
              groupName: "Basic",
              list: [
                {
                  href: "/components/layout",
                  name: "布局"
                }
              ]
            },
            {
              groupName: "Form",
              list: [
                {
                  href: "/components/radio",
                  name: "按钮"
                }
              ]
            }
          ]
        }
      ],
      menuData2: [
        {
          name: "中国近现代史纲要",
          icon: "user",
          expand: true,
          children: [
            {
              name: "第一章",
              selected: true,
              href:"/view/modern/HelloWorld"
            },
            {
              name: "第二章"
            }
          ]
        },
        {
          name: "马克思主义基本原理概论",
          icon: "laptop",
          children: [
            {
              name: "option5"
            },
            {
              name: "option6"
            },
            {
              name: "option7"
            },
            {
              name: "option8"
            }
          ]
        },
        {
          name: "计算机网络原理",
          icon: "notification",
          children: [
            {
              name: "option9"
            },
            {
              name: "option10"
            },
            {
              name: "option11"
            },
            {
              name: "option12"
            }
          ]
        }
      ]
    };
  }
};
</script>
