import "./Counter.css";

export default {
  name: "Counter",
  data: function() {
    return {
      count: 3,
    };
  },
  beforeCreate() {
    console.log("before create");
  },
  beforeMount() {
    console.log("before mount");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  computed: {
    // check if the count is reaching failure or outstanding grade
    exceeding() {
      if (this.count >= 8) return 1;
      else if (this.count <= 2) return -1;
      return 0;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
