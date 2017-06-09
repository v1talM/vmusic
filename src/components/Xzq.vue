<template lang="html">
  <div class="col-md-8 col-sm-8 col-xs-12 singer-container xzq">
    <div class="back">

		</div>
		<div class="box1">
			<img src="./../assets/img/1.png" />
			<p><a class="hover_green" href="#"><big class="zihao">薛之谦</big></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#">单曲</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#" >专辑14</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#" >MV129</a></p>
			<span><a class="a1" href="#"><big>▷&nbsp;播放歌手热门歌曲</big></a></span>
			<h2><a class="hover_green" href="#">单曲</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#">专辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#" ><big class="zi1">MV</big></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#" >歌词</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="hover_green" href="#" >资料</a></h2>
		</div>
		<div class="box2">
			<figure class="view1">
        <div style="width:100%; height:152px;overflow:hidden">
          <img src="./../assets/img/5.png"/>
        </div>
				<figcaption>
					<p >火星人来过</p>
					<p class="p1">薛之谦</p>
				</figcaption>
				<img src="./../assets/img/cover_play.png" class="btn1" />
			</figure>
			<figure class="view2">
        <div style="width:100%; height:152px;overflow:hidden">
				      <img src="./../assets/img/3.png" />
        </div>
				<figcaption>
					<p >你还要我怎样</p>
					<p class="p1">薛之谦</p>
				</figcaption>
				<img src="./../assets/img/cover_play.png" class="btn1" />
			</figure>
			<figure class="view3">
        <div style="width:100%; height:152px;overflow:hidden">
				      <img src="./../assets/img/4.png" />
        </div>
				<figcaption>
					<p >绅士</p>
					<p class="p1">薛之谦</p>
				</figcaption>
				<img src="./../assets/img/cover_play.png" class="btn1" />
			</figure>

		</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.xzq .back{
	height: 187px;
	width: 100%;
	background-image: url('./../assets/./../assets/img/bg_search.jpg');
}
.xzq .box1 img{
	height: 100%;
	margin-left: 50px;
	margin-top: 20px;

}
.xzq .zihao{
	font-size: 40px;
	color: #000000;
}
.xzq a.hover_green:hover{
	color: green;
}
.xzq .box1 {
  position: relative;
}
.xzq .box1 p{
  margin-top: 35px;
	margin-left: 35px;
  display: inline-block;
}
.xzq a{
	text-decoration: none;
	color: black;
}
.xzq .a1{
	color: white;
  font-size: 12px;
}
.xzq .zi1{
	color: palegreen;
}
.xzq .box1 span{
				width: 170px;
				background: palegreen;
				border-radius:3px ;
				text-align: center;
				font-size: 15px;
				color: white;
				padding:5px 0;
        position: absolute;
        bottom: 0;
        left: 185px;
}
.xzq .box1 h2{
	float: left;
	margin-top: 45px;
	margin-left: 53px;
  font-size: 20px;
}
/*--------------------------*/
.xzq .box2 {
     position: absolute;
     margin-top: 140px;
}
.xzq figure .btn1{
	display: none;
	position: absolute;
	top: 50px;
	left: 100px;
  width: 50px;
}
.xzq figure{
	width: 30%;
	float: left;
	height: 350px;
	position: relative;
  margin-left: 15px;

}
.xzq figure img:first-child{
  width: 100%;
  margin-bottom: 15px;
  transition: all .5s;
}
.xzq figure:hover img:first-child{
  transform: scale(1.1);
}
.xzq figure p{
  color: #222222
}
.xzq figure:hover .btn1{
	display: block;
}
.xzq .p1{
	color: palegreen;
	font-size: 14px;
}
.xzq .singer-container a {
  text-decoration: none
}
</style>
