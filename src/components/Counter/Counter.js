import "./Counter.css";

export default {
  name: "Counter",
  data: function() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
