---
index: false
---

<button @click="testStatus ^= 1"> Click me testStatus: {{testStatus}}</button> <span v-show="testStatus"> Test </span>

<script>
export default {
  data() {
    return {
      testStatus: 0
    }
  }
}
</script>
