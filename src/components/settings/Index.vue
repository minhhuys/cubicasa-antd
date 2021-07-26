<template>
  <div class="settings">
    <div class="card-container">
      <Tabs type="card">
        <TabPane key="1" tab="General">
          <General />
        </TabPane>
        <TabPane key="2" tab="Styling">
          <Styling />
        </TabPane>
        <TabPane key="3" tab="Users & offices">
          <Manage />
        </TabPane>
        <TabPane key="4" tab="Developers">
          <Developers />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { Tabs } from "ant-design-vue";

import General from "@/components/settings/General";
const Styling = () => import("@/components/settings/Styling");
const Manage = () => import("@/components/settings/Manage");
const Developers = () => import("@/components/settings/Developers");

export default {
  components: {
    Tabs,
    TabPane: Tabs.TabPane,

    General,
    Styling,
    Manage,
    Developers,
  },

  methods: {},
};
</script>

<style lang="scss">
.settings {
  max-width: 700px;
  margin: 0 auto;

  .card-container {
    // background: #f5f5f5;
    overflow: hidden;
    padding: 40px 24px;
    border-bottom-left-radius: 4px;
    height: auto;
  }
  .card-container > .ant-tabs-card > .ant-tabs-content {
    height: auto;
    margin-top: -16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }

  .ant-tabs {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .ant-tabs-bar {
      .ant-tabs-nav-container {
        background-color: #569789;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;

        .ant-tabs-tab {
          color: white;

          &:hover {
            color: white;
          }

          &.ant-tabs-tab-active {
            color: #569789;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
