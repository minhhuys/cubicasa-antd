<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #eaeaea !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.ant-form {
  .ant-form-item-label {
    label {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 700;

      span {
        color: #aaaaaa;
        font-weight: 400;
      }
    }
  }
}
.d-flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.ant-input:hover,
.ant-input:focus,
.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active,
.ant-input-number:hover,
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: rgba(72, 172, 150, 0.5) !important;
  box-shadow: none !important;
}
.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active,
.ant-btn.active {
  border-color: inherit !important;
  color: inherit !important;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #569789 !important;
  border-color: #569789 !important;
}

.ant-btn.btn-main {
  background-color: #569789;
  background-image: linear-gradient(60deg, #1d4357, #569789);
  box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
  color: #fff !important;
  font-weight: 700 !important;
  text-shadow: none;
  border: none;

  &:hover {
    background-color: #569789;
    background-image: linear-gradient(60deg, #1d4357, #569789);
    box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
    color: #fff !important;
    border: none;
  }
}

.ant-btn.btn-delete {
  box-shadow: 0 0 0 1px #f90066 inset !important;
  color: #f90066 !important;
}

.general-setting,
.styling-setting {
  h3 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
  }

  .form-group {
    .flag {
      margin-right: 8px;
    }
    label {
      display: flex;
      align-items: center;
    }

    .ant-select-selection__choice__content {
      font-weight: 700;
    }
  }
}

// spacing

.mt-5 {
  margin-top: 24px;
}

.mb-5 {
  margin-bottom: 24px;
}

.mt-3 {
  margin-top: 16px;
}

.ml-2 {
  margin-left: 8px;
}
.mr-2 {
  margin-right: 8px;
}
</style>
