<script>
/**
 * 表格操作按钮组组件
 * @props { Array } btnOpts -  按钮组设置
 */
import { cloneDeep } from 'lodash';
export default {
  functional: true,
  name: 'OperateBtnGroup',
  props: {
    // 按钮组设置，必填
    btnOpts: {
      type: Array,
      required: true,
    },
    // 是否为表单搜索按钮组，可选
    toolbar: {
      type: Boolean,
      default: false,
    },
    // 最多显示几个按钮，可选
    max: {
      type: Number,
      default: 3,
    },
    // 分割物，可选
    divider: {
      type: Object,
      default: () => ({ need: true, render: null }), // 当toolbar为true时,此值必为false
    },
    // 更多按钮label，可选
    moreBtnNam: {
      type: String,
      default: '更多',
    },
  },
  render: function (h, ctx) {
    const props = ctx.props;
    const dividerRender = props.divider.render || (
      <q-divider direction="vertical" />
    );
    const { btnOpts, moreBtnOpts } = initOpts(props);
    const moreBtnRender = setMoreBtn(props);
    const needDivider = props.toolbar ? false : props.divider.need;
    let btnClass = needDivider ? 'divider' : 'noDivider';
    btnClass += props.toolbar ? ' search' : '';
    return (
      <div class="opr-btn-group">
        {btnOpts.map((item) => {
          if (item.divider) return dividerRender;
          if (item.label == '更多') {
            return (
              <q-dropdown class="more">
                {moreBtnRender}
                <q-dropdown-menu slot="dropdown">
                  {moreBtnOpts.map((item) => {
                    return (
                      <q-dropdown-item disabled={item.attrs.disabled ?? false}>
                        <q-button
                          style={{
                            width: '100%',
                            padding: '6px 0',
                          }}
                          props={item.attrs}
                          onClick={item.click}
                        >
                          {item.label}
                        </q-button>
                      </q-dropdown-item>
                    );
                  })}
                </q-dropdown-menu>
              </q-dropdown>
            );
          }
          return (
            <q-button
              class={btnClass}
              props={item.attrs}
              on={{ click: item?.click || (() => {}) }}
            >
              {item.label}
            </q-button>
          );
        })}
      </div>
    );

    // 初始化设置
    function initOpts(props) {
      const { btnOpts, divider, max, toolbar } = props;
      const opts = setBtnOpts(btnOpts, toolbar);
      const needDivider = toolbar ? false : divider.need;
      let group = new BtnGroup(opts, max, needDivider);
      let data = group.getData();
      group = null;
      return {
        btnOpts: data.btnOpts,
        moreBtnOpts: data.moreBtnOpts,
      };
    }

    // 表格操作按钮组设置
    function setBtnOpts(btnOpts, toolbar) {
      let opts = btnOpts.map((item) => {
        return {
          attrs: {
            type: toolbar ? 'primary' : 'text',
            size: 'small',
            ...item.attrs,
          },
          ...publicBtnOpts(item),
        };
      });
      return opts.filter((item) => {
        return item.visible;
      });
    }
    // 通用设置
    function publicBtnOpts(item) {
      return {
        label: item.label,
        click: item.click ?? (() => {}),
        visible: item.visible ?? true,
        divider: false,
      };
    }
    //
    function setMoreBtn(props) {
      if (props.toolbar) {
        return (
          <q-button type="primary">
            {props.moreBtnNam}
            <i class="q-icon-arrow-down q-icon--right" />
          </q-button>
        );
      } else {
        return (
          <q-link type="primary" underline={false}>
            {props.moreBtnNam}
            <i class="q-icon-arrow-down q-icon--right" />
          </q-link>
        );
      }
    }
  },
};
class BtnGroup {
  constructor(btnOpts = [], max, needDivider) {
    this.isFirstBtn = true; // 是否为第一个显示按钮
    this.divider = {
      need: needDivider,
      addCount: 0,
    };
    this.btnIndex = 0; // 显示按钮组当前index
    this.btnLength = max > 0 ? max : 1; //显示按钮组长度
    this.sliceBtn = []; // 更多按钮组
    this.ans = cloneDeep(btnOpts);
    this.traversal(btnOpts);
  }
  traversal(btnOpts) {
    btnOpts.map((item, index) => {
      this.controlBtnOpts(item, index);
    });
  }
  controlBtnOpts(btnOpt, index) {
    const divider = this.divider.need;
    this.btnIndex++;
    const start = divider ? index - 1 + this.divider.addCount++ : index;
    switch (true) {
      // 显示按钮控制
      case this.btnIndex < this.btnLength: {
        !this.isFirstBtn && divider && this.addDivider(start);
        break;
      }
      // 更多按钮控制
      case this.btnIndex == this.btnLength: {
        this.moreBtnOpts(start, btnOpt);
        break;
      }
      // 更多按钮下拉菜单配置
      case this.btnIndex > this.btnLength: {
        btnOpt.attrs.type = 'text';
        this.sliceBtn.push(btnOpt);
        break;
      }
    }
    this.isFirstBtn = false;
  }
  moreBtnOpts(start, btnOpt) {
    const divider = this.divider.need;
    const end = start + (divider ? 2 : 1);
    if (this.isFirstBtn) {
      this.replace(0, 1, { label: '更多' });
    } else {
      this.replace(start, 1, { label: '更多' });
      divider && this.addDivider(start);
    }
    btnOpt.attrs.type = 'text';
    this.sliceBtn.push(btnOpt);
    this.ans = this.ans.slice(0, end);
  }
  replace(index, howMany, item) {
    this.ans.splice(index, howMany, item);
  }
  addDivider(start) {
    this.replace(start, 0, { divider: true });
  }
  getData() {
    return {
      btnOpts: this.ans,
      moreBtnOpts: this.sliceBtn,
    };
  }
}
</script>
<style lang="scss" scoped>
.opr-btn-group {
  display: inline-block;
  overflow: hidden;
  margin-left: $s2-2;
  border-radius: $corner-1;
  .divider {
    margin: 0;
  }
  .noDivider {
    margin: 0 $corner-2 0 0;
  }
  .search {
    margin: 0 $s2-2 0 0;
  }
  .more {
    position: relative;
    top: $line-1;
    .q-link {
      color: $color-text1-3;
    }
  }
}
</style>