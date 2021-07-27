<template>
  <div class="general-setting">
    <h3>
      Basic information
    </h3>
    <Divider />

    <FormModel layout="vertical" :model="form">
      <FormModelItem class="form-group">
        <template slot="label">
          Name
        </template>
        <Input
          allowClear
          v-model="form.name"
          placeholder="Please enter your name"
        />
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          VAT ID <span>| required for EU based companies</span>
        </template>
        <Input
          allowClear
          v-model="form.vat"
          placeholder="Please enter VAT ID"
        />
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Country
        </template>
        <img
          class="flag"
          src="https://www.norden.org/sites/default/files/styles/content_size_800/public/images/Finsk%2520flag106604.jpeg"
          width="16"
          height="11"
          alt=""
        />
        <span>FI</span>
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Collaborators
        </template>
        <Checkbox @change="onChangeCheckbox" :checked="checked">
          Allow collaborators to create orders without drafts
        </Checkbox>
      </FormModelItem>

      <FormModelItem class="form-group">
        <template slot="label">
          Delivery emails send to:
        </template>
        <Select
          showArrow
          mode="multiple"
          placeholder="Inserted are removed"
          :value="form.emails"
          style="width: 100%"
          @change="handleChangeEmail"
        >
          <SelectOpt v-for="item in filteredOptions" :key="item" :value="item">
            {{ item }}
          </SelectOpt>
        </Select>
      </FormModelItem>
    </FormModel>

    <h3>
      Current plan
    </h3>
    <Divider />

    <FormModel layout="vertical" :model="form">
      <FormModelItem class="form-group">
        <template slot="label">
          Change plan
        </template>
        <Select
          showArrow
          placeholder="Inserted"
          :value="form.plans"
          style="width: 100%"
          @change="handleChangePlan"
        >
          <SelectOpt v-for="item in filteredPlans" :key="item" :value="item">
            {{ item }}
          </SelectOpt>
        </Select>
      </FormModelItem>
    </FormModel>

    <div class="credit-card mt-5">
      <div class="card-icon" @click="toggleHidden">
        <Icon type="eye" :style="{ fontSize: '18px', fontWeight: 600 }" />
      </div>
      <div class="card-logo-visa">
        <img src="@/assets/images/visa.png" width="30" alt="" />
      </div>
      <div class="card-description">
        <p class="card-number">
          <span>{{
            isHidden
              ? hidden_card_number.slice(0, 4)
              : form.card_number.slice(0, 4)
          }}</span>
          <span>{{
            isHidden
              ? hidden_card_number.slice(4, 8)
              : form.card_number.slice(4, 8)
          }}</span>
          <span>{{
            isHidden
              ? hidden_card_number.slice(8, 12)
              : form.card_number.slice(8, 12)
          }}</span>
          <span>{{
            isHidden
              ? hidden_card_number.slice(12, 16)
              : form.card_number.slice(12, 16)
          }}</span>
        </p>
        <div class="card-info d-flex">
          <p class="reset-mg card-info-expired">Thru: <span>11/21</span></p>
          <p class="reset-mg card-info-cvv">CVV: <span>999</span></p>
        </div>
        <p class="card-name">
          Nguyen Minh Huy
        </p>
      </div>
    </div>
    <div class="credit-action text-center d-flex align-center">
      <Icon type="sync" />
      <p>
        Update credit card
      </p>
    </div>

    <div class="general-action custom-on-mobile">
      <Button icon="stop">Cancel subscription</Button>
      <Button icon="unordered-list" class="btn-main">View invoices</Button>
    </div>

    <Divider />

    <div class="general-action text-center">
      <Button>Undo</Button>
      <Button class="btn-main">Save setting</Button>
    </div>

    <h3 class="mt-5">
      Delete Company
    </h3>
    <Divider />

    <div class="text-center">
      <Button class="btn-delete ">Delete 'Test company'</Button>
    </div>
  </div>
</template>

<script>
import {
  FormModel,
  Input,
  Checkbox,
  Select,
  Divider,
  Icon,
  Button,
} from "ant-design-vue";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
const PLANS = ["pay-as-you-go President", "Premium"];

export default {
  components: {
    FormModel,
    FormModelItem: FormModel.Item,
    Input,
    Checkbox,
    Select,
    SelectOpt: Select.Option,
    Divider,
    Icon,
    Button,
  },

  computed: {
    filteredOptions() {
      return OPTIONS.filter((o) => !this.form.emails.includes(o));
    },

    filteredPlans() {
      return PLANS.filter((o) => !this.form.plans.includes(o));
    },
  },

  data() {
    return {
      checked: true,
      form: {
        name: "",
        vat: "Fi1231239",
        emails: [],
        plans: ["Premium"],
        card_number: "1234567898765432",
      },
      hidden_card_number: "",

      isHidden: true,
      //   filteredOptions: ["Apples", "Nails", "Bananas", "Helicopters"],
    };
  },

  methods: {
    onChangeCheckbox() {
      this.checked = !this.checked;
    },

    handleChangeEmail(email) {
      this.form.emails = email;
    },

    handleChangePlan(plan) {
      this.form.plans = plan;
    },

    hiddenNumberCard() {
      let hidden =
        new Array(this.form.card_number.length - 3).join("*") +
        this.form.card_number.substr(this.form.card_number.length - 4, 4);
      this.hidden_card_number = hidden;
    },

    toggleHidden() {
      this.isHidden = !this.isHidden;
    },
  },

  mounted() {
    console.log("general-setting");
  },

  created() {
    this.hiddenNumberCard();
  },
};
</script>

<style lang="scss">
.general-setting {
  .credit-card {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 300px;
    height: 170px;
    position: relative;
    border: 1px solid #d4d4d5;
    border-bottom: 0;

    .card-icon {
      position: absolute;
      top: -8px;
      left: -8px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      background: white;
    }

    .card-logo {
      position: absolute;
      top: 24px;
      right: 24px;
    }

    .card-logo-visa {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }

    .card-description {
      position: absolute;
      left: 24px;
      bottom: 10%;
      color: rgba(0, 0, 0, 0.68);

      .card-name {
        font-size: 18px;
        font-weight: 700;
      }

      .card-number {
        font-size: 14px;
        font-weight: 600;

        span:not(:last-child) {
          margin-right: 24px;
        }
      }

      .card-info {
        font-size: 13px;
        font-weight: 600;
        justify-content: flex-start;

        > p {
          margin-right: 30px;
        }
      }
    }
  }

  .credit-action {
    width: 300px;
    border: 1px solid rgba(86, 151, 137, 0.85);
    color: rgba(86, 151, 137, 0.85);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    justify-content: center;

    p {
      margin: 0;
      padding: 8px 12px;
    }

    i.feather {
      transform: rotate(0deg);
      transition: all 0.5s ease;
      height: auto;
      width: auto;
    }

    &:hover {
      i {
        transform: rotate(180deg);
        transition: all 0.5s ease;
      }
    }
  }

  .general-action {
    margin-top: 16px;

    button:first-child {
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 768px) {
  .general-setting {
    .general-action {
      &.custom-on-mobile {
        display: flex;
        flex-direction: column;

        button:first-child {
          order: 2;
          margin-right: 0;
          margin-top: 12px;
        }

        button:last-child {
          order: 1;
        }
      }
    }
  }
}
</style>
