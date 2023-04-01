import React from "react";

function MyButton() {
  return <button>Click me</button>;
}

export default MyButton;

import MyButton from "./components/MyButton";

function App() {
    return (
      <div>
        <MyButton />
      </div>
    );
  }

<template>
  
</template>

<script>
export default {
  name: "MyButton",
};
</script>


<template>
  <div>
    <MyButton />
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  name: "App",
  components: {
    MyButton,
  },
};
</script>