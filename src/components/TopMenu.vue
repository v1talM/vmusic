<template lang="html">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">V-Music</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">歌 单 <span class="sr-only">(current)</span></a></li>
        </ul>
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-primary">搜 索</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .navbar
    border-radius: 0;
    min-height: 50px;
    margin-bottom: 0
  .navbar-brand
    height: 50px;
    padding: 14.5px 15px;
  .navbar-nav>li>a
    padding: 14.5px 15px;
  .navbar-form
    margin-top: 11.5px;
    margin-bottom: 11.5px;
  .form-control
    height: 25px
  .btn
    padding: 3px 15px
    font-size: 12px
</style>
