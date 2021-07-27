<template>
  <div class="manage-setting">
    <h3>
      Manage offices & users
    </h3>
    <Divider />

    <div class="manage-item">
      <div class="d-flex align-center space-between">
        <p class="m-0 title-office">Helsinki</p>
        <Button>
          <Icon type="edit" />
          Edit
        </Button>
      </div>
      <div>
        <Dropdown :trigger="['click']" class="mr-2">
          <Button class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            <Icon type="user" /> {{ emails }}
            <Icon type="caret-down" :style="{ fontSize: '12px' }" />
          </Button>

          <Menu slot="overlay">
            <MenuItem readonly>
              Account Detail
            </MenuItem>
            <MenuItem class="item-info" disabled>
              <p class="m-0">
                {{ emails }}
              </p>
              <p class="m-0">
                Collaborator
              </p>
            </MenuItem>
            <MenuItem>
              <p class="m-0">
                <Icon type="edit" />
                Edit
              </p>
            </MenuItem>
          </Menu>
        </Dropdown>

        <Dropdown :trigger="['click']" class="mr-2">
          <Button class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            <Icon type="user" /> {{ emails }}
            <Icon type="caret-down" :style="{ fontSize: '12px' }" />
          </Button>

          <Menu slot="overlay">
            <MenuItem readonly>
              Account Detail
            </MenuItem>
            <MenuItem class="item-info" disabled>
              <p class="m-0">
                {{ emails }}
              </p>
              <p class="m-0">
                Collaborator
              </p>
            </MenuItem>
            <MenuItem>
              <p class="m-0">
                <Icon type="edit" />
                Edit
              </p>
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { Dropdown, Menu, Modal, Button, Icon, Divider } from "ant-design-vue";
export default {
  components: {
    Dropdown,
    Menu,
    MenuItem: Menu.Item,
    Modal,
    Button,
    Icon,
    Divider,
  },

  data() {
    return {
      emails: "Hello@gmail.com",
    };
  },

  mounted() {
    console.log("manage-setting");
  },
};
</script>

<style lang="scss">
.manage-setting {
  .manage-item {
    .title-office {
      font-size: 20px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}

.ant-dropdown-menu {
  .item-info {
    border-top: 1px solid #eaeaae;
    border-bottom: 1px solid #eaeaea;
  }
}
</style>
