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
.ant-select-selection:active {
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
</style>
