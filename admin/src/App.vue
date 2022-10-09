<template>
  <div id="app">
    <Top/>
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Top from "./components/Top"
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Menu,Top
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity .15s
 }
 .fade-enter, .fade-leave-to{
	opacity: 0
} 
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  user-select:none;
}
#app{
  width: 100%;
  height: 100%;
}
body{
  background: #313131;
}
</style>
