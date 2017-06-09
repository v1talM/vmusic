<template lang="html">
  <div class="col-md-8 singer-container dzq">
    <div  class="head">
  			<figure class="view1">
  			<img src="./../assets/img/gem.png">
  			<figcaption>
  				<h2>G.E.M.邓紫棋资料</h2>
  				<h3>邓紫棋（G.E.M.），原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。</h3>
  			</figcaption>
  		</figure>
  		<p class="daohang"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="green" href="#">歌曲</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  				<a class="green" href="#">专辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  				<a class="green" href="#">MV</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  				<a class="green" href="#">资料</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  				<a class="a1" href="#">相似歌手（10）</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  				<a href="#">我要纠错</a></p>
  		<figure class="view2">
  			<img src="./../assets/img/hcy.png">
  			<figcaption>
  				<p>华晨宇</p>
  			</figcaption>
  		</figure>

  		<figure class="view3">
  			<img src="./../assets/img/eason.png">
  			<figcaption>
  				<p>陈奕迅</p>
  			</figcaption>
  		</figure>

  		<figure class="view4">
  			<img src="./../assets/img/jay.jpg">
  			<figcaption>
  				<p>周杰伦</p>
  			</figcaption>
  		</figure>
  	</div>
    <audio src="./music/paomo.mp3" autoplay="autoplay" id="musicPlay" loop="loop"></audio>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.dzq .head{
	width: 100%;
}
.dzq .head img{
	width: 100%;
	height: 20%;
}
.dzq .a1{
	color: green;
}
.dzq a:hover{
	color: green;
}
.dzq a{
	position: absolute ;
	top: 200px;
}
.dzq img:hover {
	/* 透明度*/
	opacity: 0.5;
	transform: translateX(50px);
	box-shadow: 10px 10px 5px  rgba(50,50,0.6);
}
.dzq h2,
.dzq h3,
.dzq p,
.dzq img,
.dzq div {
	transition: all 2s;
}

.dzq h2 {
	position: absolute;
	top: 40px;
	left: 100px;
	color: blue;
  font-size: 22px;
}
.dzq h3 {
	position: absolute;
	top: 90px;
	left: 100px;
	color: blueviolet;
  font-size: 16px;
}
.dzq p.daohang{
	margin-bottom: 80px;
}
.dzq .view2, .dzq .view3, .dzq .view4{
	width: 30%;
	position: relative;
	display: inline-block;
}
.dzq .view2 img, .dzq .view3 img, .dzq .view4 img{
	margin-left: 100px !important;
	box-shadow: 10px 10px 5px  rgba(50,50,0.6);
	border-radius:50% ;
}
.dzq .view2 img{
	height: 200px;
	width: 200px;
	left: 100px;
}
.dzq .view3 img{

	height: 200px;
	width: 200px;
	left: 300px;
}
.dzq .view4 img{

	height: 200px;
	width: 200px;
	left: 500px;
}
.dzq .view2 p{
	left: 100px;
	height: 100px;
}
.dzq .view3 p{
	left: 300px;
}


.dzq figcaption p{
	text-align: center;

}

.dzq h2:hover {
	transform: translateX(30px);
}
.dzq h3:hover{
	transform: translateX(30px);
}

.dzq .view1 .info {
	position: absolute;
	left: 70px;
	width: 249px;
	color: white;
	transition: all 1s;
}
</style>
