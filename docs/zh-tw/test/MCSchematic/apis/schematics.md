<!-- {{params}}
<label>Begin: {{begin}}｜</label><input id="in-begin" type="number" value="0"></input><button :click="_begin = document.getElementById('in-begin').value;">Generate</button> -->

<!-- <Schematics /> -->

<!-- <script setup>
import Schematics from "@private-components/mcschematic/schematic.vue";
</script>
<script>
  export default {
    data() {
      return {
        _begin: 0,
        _params: {
          begin: () => this._begin
        }
      }
    },
    methods: {
      begin() {
        this._begin = document.getElementById("in-begin").value;
      }
    },
    computed: {
      params() {
        return Object.entries(this._params).map(([key, value]) => `${key}=${value()}`).join("&");
      }
    }
  }
</script> -->