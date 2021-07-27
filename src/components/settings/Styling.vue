<template>
  <div class="styling-setting">
    <h3>
      Floor plan language and logo
    </h3>
    <Divider />
    <span>
      Style options will be applied to all new floor plans in your account.
    </span>

    <div class="mt-5"></div>

    <FormModel layout="vertical" :model="form">
      <FormModelItem class="form-group">
        <template slot="label">
          Language

          <Tooltip
            class="ml-2"
            placement="topLeft"
            title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <Icon type="question-circle" />
          </Tooltip>
        </template>
        <Select
          showArrow
          placeholder="Inserted your language"
          :value="form.language"
          style="width: 100%"
          @change="handleChangeLanguage"
        >
          <SelectOpt
            v-for="item in filteredLanguages"
            :key="item"
            :value="item"
          >
            {{ item }}
          </SelectOpt>
        </Select>
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Unit
        </template>
        <Select
          showArrow
          placeholder="Inserted unit"
          :value="form.unit"
          style="width: 100%"
          @change="handleChangeUnit"
        >
          <SelectOpt v-for="item in filteredUnits" :key="item" :value="item">
            {{ item }}
          </SelectOpt>
        </Select>
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Logo
        </template>
        <div>
          <div class="placeholder-logo">
            <img v-if="imgSrc" :src="imgSrc" alt="" />
            <img
              v-else
              src="https://4197r62cmrjs32n9dndpi2o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/square-placeholder.jpg"
              alt=""
            />

            <div v-if="imgSrc" @click="viewImage">
              <!-- <feather type="eye" class="icon-lg icon-dual"></feather> -->
              <Icon type="eye" :style="{ color: 'white', fontSize: '16px' }" />
            </div>
          </div>
          <div class="mt-3">
            <Button v-if="imgSrc" class="btn-delete" @click="handleDelete">
              <!-- <i class="uil uil-trash"></i> -->
              <Icon type="delete" />
              Clear
            </Button>
            <Button
              class="btn width-md"
              :class="{
                'btn-soft-secondary': !imgSrc,
                'btn-soft-success': imgSrc,
              }"
              @click="!imgSrc ? handleUpload() : handleSubmit()"
            >
              <div v-if="!imgSrc">
                <Icon type="plus" />
                Add logo
              </div>
              <div v-else>
                <!-- <i class="uil uil-check"></i> -->
                <Icon type="check" />
                Submit
              </div>
            </Button>
          </div>

          <input
            v-show="false"
            ref="input"
            type="file"
            accept="image/*"
            @change="onChange"
          />
        </div>
      </FormModelItem>
    </FormModel>

    <h3 class="mt-5">
      Floor plan theme
    </h3>
    <Divider />
    <p>
      To understand each color option, please refer to our support article.
      Color options do not work for custom room labels.
    </p>

    <FormModel layout="vertical" :model="form">
      <Row :gutter="8" class="setting-color">
        <Col :xs="{ span: 24 }" :md="{ span: 12 }">
          <FormModelItem class="form-group">
            <template slot="label">
              Wall color
            </template>
            <div class="d-flex align-center">
              <v-swatches
                v-model="form.wall_color"
                fallback-ok-text="Select"
                show-fallback
                show-border
                swatch-size="32"
                :trigger-style="triggerColorStyle"
              ></v-swatches>
              <Input v-model="form.wall_color" />
            </div>
          </FormModelItem>
        </Col>

        <Col :xs="{ span: 24 }" :md="{ span: 12 }">
          <FormModelItem class="form-group">
            <template slot="label">
              Floor color
            </template>
            <div class="d-flex align-center">
              <v-swatches
                v-model="form.floor_color"
                fallback-ok-text="Select"
                show-fallback
                show-border
                swatch-size="32"
                :trigger-style="triggerColorStyle"
              ></v-swatches>
              <Input v-model="form.floor_color" />
            </div>
          </FormModelItem>
        </Col>

        <Col :xs="{ span: 24 }" :md="{ span: 12 }">
          <FormModelItem class="form-group">
            <template slot="label">
              Bedroom color
            </template>
            <div class="d-flex align-center">
              <v-swatches
                v-model="form.bed_color"
                fallback-ok-text="Select"
                show-fallback
                show-border
                swatch-size="32"
                :trigger-style="triggerColorStyle"
              ></v-swatches>
              <Input v-model="form.bed_color" />
            </div>
          </FormModelItem>
        </Col>

        <Col :xs="{ span: 24 }" :md="{ span: 12 }">
          <FormModelItem class="form-group">
            <template slot="label">
              Outdoor color
            </template>
            <div class="d-flex align-center">
              <v-swatches
                v-model="form.outdoor_color"
                fallback-ok-text="Select"
                show-fallback
                show-border
                swatch-size="32"
                :trigger-style="triggerColorStyle"
              ></v-swatches>
              <Input v-model="form.outdoor_color" />
            </div>
          </FormModelItem>
        </Col>
      </Row>

      <FormModelItem class="form-group">
        <template slot="label">
          Resolution
        </template>
        <Select
          showArrow
          placeholder="Inserted your resolution"
          :value="form.resolutions"
          style="width: 100%"
          @change="handleChangeResolution"
        >
          <SelectOpt
            v-for="item in filteredResolutions"
            :key="item"
            :value="item"
          >
            {{ item }}
          </SelectOpt>
        </Select>
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Door swing degree
        </template>

        <InputNumber v-model="form.degree" style="width: 100%" />
      </FormModelItem>

      <div>
        <Checkbox @change="onChangeMeasure" :checked="form.checked1">
          Measurement Arrow
        </Checkbox>
      </div>
      <div>
        <Checkbox @change="onChangeNoFill" :checked="form.checked2">
          No fill fixed furniture
        </Checkbox>
      </div>
      <div>
        <Checkbox @change="onChangeEstimate" :checked="form.checked3">
          Add estimated total area element to the floor plan.
        </Checkbox>
      </div>
      <div class="d-flex">
        <Checkbox @change="onChangeCompass" :checked="form.checked4">
          Add compass to the floor plan
          <Tooltip
            class="ml-2 mr-2"
            placement="topLeft"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          >
            <Icon type="exclamation-circle" />
          </Tooltip>
          <Badge
            count="Experimental"
            :number-style="{ backgroundColor: '#fbbd08', color: 'white' }"
          />
        </Checkbox>
      </div>

      <div class="mt-5"></div>

      <FormModelItem class="form-group">
        <template slot="label">
          Disclaimer Text (Leave empty for default, maximum 85 characters)
        </template>
        <span
          >Please note, that CubiCasa shall take no responsibility for the
          disclaimers or changes you make to the floorplan.</span
        >

        <Input
          v-model="form.disclaimer"
          placeholder="SIZES AND DIMENSIONS ARE APPROXIMATE. ACTUAL MAY VARY."
        />
      </FormModelItem>
    </FormModel>

    <div class="general-action text-center">
      <Button class="mr-2">Undo</Button>
      <Button class="btn-main">Save setting</Button>
    </div>

    <Modal
      width="450px"
      v-model="visible"
      centered
      :footer="null"
      :maskClosable="false"
      dialogClass="preview-image"
      :afterClose="closeModal"
      title="Preview Image"
    >
      <img :src="imgSrc" alt="" />
    </Modal>
  </div>
</template>

<script>
import {
  Divider,
  Select,
  FormModel,
  Tooltip,
  Icon,
  Button,
  Modal,
  Input,
  Row,
  Col,
  InputNumber,
  Badge,
  Checkbox,
} from "ant-design-vue";

const LANGUAGE = ["English", "English with primary denotation", "Finnish"];
const UNIT = ["Metric", "Imperial", "Both"];
const RES = [
  "4:3 – 4000x3000px (high resolution)",
  "4:3 – 2000x1500px (web optimized)",
  "3:2 – 4000x2667px (high resolution)",
  "3:2 – 2000x1333px (web optimized)",
];

import UploadImage from "@/mixins/upload-image";

import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";

export default {
  mixins: [UploadImage],
  components: {
    FormModel,
    FormModelItem: FormModel.Item,
    Divider,
    Select,
    SelectOpt: Select.Option,
    Tooltip,
    Icon,
    Button,
    Modal,
    Input,
    VSwatches,
    Row,
    Col,
    InputNumber,
    Badge,
    Checkbox,
  },

  data() {
    return {
      form: {
        language: [],
        unit: ["Metric"],
        wall_color: "#000",
        floor_color: "#777777",
        bed_color: "#fff",
        outdoor_color: "#eaeaea",
        resolutions: ["4:3 – 4000x3000px (high resolution)"],
        degree: 90,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: true,
        disclaimer: "",
      },

      triggerColorStyle: {
        width: "32px",
        height: "32px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        borderTop: "1px solid #d9d9d9",
        borderLeft: "1px solid #d9d9d9",
        borderBottom: "1px solid #d9d9d9",
      },
      imgSrc: "",
      visible: false,
    };
  },
  computed: {
    filteredLanguages() {
      return LANGUAGE.filter((o) => !this.form.language.includes(o));
    },

    filteredUnits() {
      return UNIT.filter((o) => !this.form.unit.includes(o));
    },

    filteredResolutions() {
      return RES.filter((o) => !this.form.resolutions.includes(o));
    },
  },

  methods: {
    handleChangeLanguage(lang) {
      this.form.language = lang;
    },

    handleChangeUnit(unit) {
      this.form.unit = unit;
    },

    handleChangeResolution(res) {
      this.form.resolutions = res;
    },

    handleUpload() {
      this.$refs.input.click();
    },

    handleDelete() {
      this.imgSrc = null;
    },

    handleSubmit() {
      console.log("submit");
    },

    handleSubmitForm() {
      console.log("handleSubmitForm");
    },

    viewImage() {
      this.visible = true;
    },

    closeModal() {
      this.visible = false;
    },

    onChange(data) {
      // this.loading = true
      const file = data.target.files[0];
      if (file) {
        this.$_uploadImage_readImage(file).then((baseFile) => {
          this.imgSrc = baseFile;
          // this.loading = false
        });
      }
    },

    onChangeMeasure() {
      this.form.checked1 = !this.form.checked1;
    },

    onChangeNoFill() {
      this.form.checked2 = !this.form.checked2;
    },

    onChangeEstimate() {
      this.form.checked3 = !this.form.checked3;
    },

    onChangeCompass() {
      this.form.checked4 = !this.form.checked4;
    },
  },

  mounted() {
    console.log("styling-setting");
  },
};
</script>

<style lang="scss">
.styling-setting {
  .placeholder-logo {
    width: 110px;
    height: 110px;
    position: relative;
    background: #eaeaea;
    overflow: hidden;

    &:hover {
      div {
        bottom: 0;
      }
    }

    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      max-width: 100%;
      max-height: 100%;
    }

    div {
      width: 110px;
      height: 110px;
      position: absolute;
      background: #111827;
      opacity: 0.65;
      transition: all 0.3s;
      bottom: -100%;
      cursor: pointer;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .btn-delete {
    margin-right: 8px;
  }

  .setting-color {
    .ant-form-item {
      margin-bottom: 12px;

      .ant-form-item-control {
        .vue-swatches {
          height: 32px;
        }

        .ant-input {
          &:hover {
            border-color: 0 !important;
          }
        }

        input {
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
}

.preview-image {
  img {
    max-width: 100%;
  }
}
</style>
