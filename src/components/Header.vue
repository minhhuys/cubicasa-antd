<template>
  <div class="header">
    <div class="header-left d-flex desktop-mode">
      <a href="/" class="header-item">
        <img
          src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg"
          alt=""
          width="100"
        />
      </a>
      <a href="javascript;:" class="header-item">
        <Icon
          type="unordered-list"
          :style="{ fontSize: '14px', fontWeight: 600, marginRight: '8px' }"
        />
        <span class="mb-0">List & Search</span>
      </a>
      <a href="javascript;:" class="header-item">
        <Icon
          type="plus"
          :style="{ fontSize: '14px', fontWeight: 600, marginRight: '8px' }"
        />
        <span class="mb-0">New Order</span>
      </a>
    </div>
    <div class="header-left mobile-mode">
      <div class="button-menu-mobile d-flex" @click="drawer = !drawer">
        <Icon type="menu" />
      </div>

      <Drawer
        :placement="placement"
        :closable="false"
        :visible="drawer"
        @close="drawer = !drawer"
        wrapClassName="left-bar"
      >
        <template slot="title">
          <img
            src="https://brand-assets-cc.s3.amazonaws.com/CUBICASA/cubicasa-logo-white.svg"
            width="160"
          />
        </template>
        <div>
          <a href="javascript;:" class="header-item">
            <span class="mb-0">List & Search</span>

            <Icon
              type="unordered-list"
              :style="{ fontSize: '16px', fontWeight: 600 }"
            />
          </a>
        </div>
        <div>
          <a href="javascript;:" class="header-item">
            <span class="mb-0">New Order</span>
            <Icon type="plus" :style="{ fontSize: '16px', fontWeight: 600 }" />
          </a>
        </div>
      </Drawer>
    </div>
    <div class="header-right">
      <Dropdown :trigger="['click']" overlayClassName="custom-menu">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <Icon type="user" />
          <span>Nguyen Minh Huy</span>
          <Icon type="caret-down" />
        </a>
        <Menu slot="overlay">
          <MenuItem key="0">
            <a href="#">
              <Icon type="user" />
              My Profile
            </a>
          </MenuItem>
          <MenuItem key="1">
            <a href="#">
              <Icon type="setting" />
              Settings
            </a>
          </MenuItem>
          <MenuItem key="3">
            <a href="#">
              <Icon type="logout" />
              Log out
            </a>
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import { Icon, Space, Dropdown, Menu, Drawer } from "ant-design-vue";
export default {
  components: {
    Icon,
    Space,
    Dropdown,
    Menu,
    MenuItem: Menu.Item,
    Drawer,
  },
  data() {
    return {
      drawer: false,
      placement: "left",
    };
  },
};
</script>

<style lang="scss" scoped>
//
// header.scss
//
$header-height: 40px;

.header {
  background-color: #163241;
  height: $header-height;
  justify-content: space-between;
  display: flex;

  .header-left,
  .header-right {
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    position: relative;

    a {
      color: #fff;
    }

    .header-item {
      height: $header-height;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }

  .header-left {
    display: flex;
    .header-item {
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 16px;
      color: rgba(255, 255, 255, 0.9);

      &::before {
        right: 0;
        position: absolute;
        content: "";
        top: 0;
        height: 100%;
        width: 1px;
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    > a {
      padding: 0 12px;
      line-height: $header-height;

      &::before {
        left: 0;
        position: absolute;
        content: "";
        top: 0;
        height: 100%;
        width: 1px;
        background: rgba(255, 255, 255, 0.08);
      }

      span {
        margin: 0 12px;
      }
    }

    .header-item {
      align-items: center;
      cursor: pointer;
    }
  }

  .mobile-mode {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header {
    .desktop-mode {
      display: none !important;
    }

    .mobile-mode {
      display: block;

      .button-menu-mobile {
        display: flex;
        padding: 0 18px;
        align-items: center;
        height: $header-height;

        &::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          height: 100%;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
        }
      }
    }

    // .left-bar {
    //   a {
    //     color: white;
    //     font-weight: 500;
    //     font-size: 16px;
    //     padding: 14px 18px;
    //     position: relative;
    //     width: 100%;

    //     &::before {
    //       position: absolute;
    //       content: "";
    //       bottom: 0;
    //       left: 0;
    //       width: 100%;
    //       height: 1px;
    //       background: rgba(255, 255, 255, 0.08);
    //     }
    //   }

    //   .logo {
    //     position: relative;

    //     a {
    //       justify-content: center;
    //     }
    //   }
    // }
  }
}
</style>

<style lang="scss">
.custom-menu {
  top: 40px;
  .ant-dropdown-menu {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
    border-radius: 0;

    .ant-dropdown-menu-item {
      i {
        margin-right: 12px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .left-bar {
    .ant-drawer-content-wrapper {
      .ant-drawer-content,
      .ant-drawer-header {
        background-color: #163241;
        color: white;
      }

      .ant-drawer-header {
        text-align: center;
        border-bottom: 0;

        &::before {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }
      }

      .ant-drawer-body {
        padding: 0;

        > div {
          position: relative;

          a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            padding: 12px 16px;
            font-size: 16px;

            &::before {
              position: absolute;
              content: "";
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: rgba(255, 255, 255, 0.08);
            }
          }
        }
      }
    }
  }
}
</style>
