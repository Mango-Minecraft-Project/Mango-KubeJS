<div v-html="rendered"></div>

<script setup>
import { ref, computed } from 'vue'

const code = ref('const a = 123')
const rendered = computed(() => `\`\`\`ts\n${code.value}\n\`\`\``)
</script>