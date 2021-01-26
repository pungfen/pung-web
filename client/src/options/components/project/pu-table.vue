

<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'pu-table',

  props: {
    data: Array,
  },

  render() {
    const columns = this.$slots.default()
    if (this.data.length) {
      return h('div', [
        h(
          'table',
          {
            class: 'table-auto',
          },
          [
            h('thead', [
              h(
                'tr',
                columns.map((c) =>
                  h(
                    'th',
                    {
                      class: 'px-4 py-2 text-emerald-600',
                    },
                    '111',
                  ),
                ),
              ),
            ]),
          ],
        ),
      ])
    } else {
      return h('div', { class: 'w-full flex justify-around mt-10' }, [
        h('span', '暂无数据'),
      ])
    }
  },
})
</script>
