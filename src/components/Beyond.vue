<template lang="html">
  <div class="col-md-8 col-sm-8 col-xs-12 singer-container beyond">
    <div class="bg0">
			<img src="./../assets/img/bg.jpg"/>
		</div>
		<span class="bg1">
			<img src="./../assets/img/beyond.jpg"/>
		</span>
			<div class="bg2">
			<p class="P1">BEYOND</p>
			<p class="P2">中文名：Beyond 职业：摇滚乐队 代表作品：《海阔天空》、《光辉岁月》、《真的爱你》、《大地》</p>
		    <p class="P3"><a href="#">单曲552</a>| <a href="#"> 专辑91</a>| <a href="#">MV178</a></p>
		   	</div>
		   	<div class="bg3">
		   	<button class="button0" >▷播放歌手热门歌曲</button>
		   	<button class="button1">+关注256.8万</button>
		   	</div>
		   	<div class="zj">
		   		<p class="P4">专辑</p>
		   		<div class="box1">

		   			<figure class="view1">
				          <img class="img1" src="./../assets/img/zj1.jpg" />
				<figcaption>
					<p class="p"><a href="#">Beyond 30th Anniversary</a></p>
				</figcaption>
				<img class="img0" src="./../assets/img/play.png"/>
			</figure>

			<figure class="view1">
				      	<img src="./../assets/img/zj2.jpg" />
				<figcaption>
					<p ><a href="#">光辉精选</a></p>

				</figcaption>
				<img class="img0" src="./../assets/img/play.png"/>
			</figure>

			<figure class="view1">
				      <img src="./../assets/img/zj3.jpg" />
				<figcaption>
					<p ><a href="#">Rock & Roll Collection</a></p>

				</figcaption>
				<img class="img0" src="./../assets/img/play.png"/>
			</figure>

			<figure class="view1">
				      	<img src="./../assets/img/zj4.jpg" />
				<figcaption>
					<p ><a href="#">弦续 别了家驹15载</a></p>

				</figcaption>
				<img class="img0" src="./../assets/img/play.png"/>
			</figure>

		   	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.beyond .bg0{
	width: 100%;
	height: 187px;
  overflow: hidden;
}
.beyond .bg0 img {
  height: 100%;
}

.beyond .bg1 img{
	    position: absolute;
		width: 250px;
		height: 250px;
		float: left;
		margin-top: 30px;
		margin-left: 40px;
		border: 1px solid ;
	    border-radius: 999px;

}
.beyond .bg2 {
	 	float: right;
	 	height: 200px;
    width: 500px;
	 	margin-top: 40px;
    margin-right: 50px;
}
.beyond .bg2 .P1{
	     position:relative;
	     font-size: 42px;
       color: #222;
}
.beyond .bg2 .P2{
		  position:relative;
		  font-size: 15px;
		  margin-top: 15PX;
color: #222;

}
.beyond p{
  color: #222;
  font-size: 20px;
}
.beyond .bg2 .P3 a{
        display:inline-block;
	      position:relative;
	      font-size: 20px;
	      color: #000;
	      text-decoration: none;

	}
.beyond .bg2 .P3 a:hover{
		 color: green;
		 font-style:initial;
}
.beyond .bg3{
  float: right;
  height: 100px;
  width: 500px;
  margin-right: 50px;

}

.beyond .button0{
		width: 130px;
		height: 35px;
		font-size: 12px;
		background:green;
		font-weight: bold;
		color: white;
		border:none;
    display: inline-block;
}
.beyond .button1{
    width: 130px;
    height: 35px;
    font-size: 12px;
		  font-weight: bold;
		  font-family:"微软雅黑";
      border:none;
      display: inline-block;
}
.beyond .zj{
		width: 100%;
		height: 300px;
		position: relative;
        float: left;
        margin-left: 60px;
		font-size:36px ;
}
.beyond .zj img:first-child{

		width: 300px;
		height:300px;
		margin-top:20px ;
		transition: all 0.5s;
}

.beyond .zj .p5{
		font-size: 12px;
}
.beyond  .zj img:hover{
	opacity: 0.8;

}

.beyond .img0{
	position: absolute;
    width:45px ;
    height: 45px;
    top: 150px;
    left: 130px;

}

.beyond .img0:hover{
	transform: scale(1.1);


}

.beyond figure{
	display: inline-block;
	position: relative;
	width: 40%;
}

.beyond .view1 p:hover{
	color: green;

}

.beyond .view1 a{
	text-decoration: none;
	color: black;
}
.beyond .view1 a:hover{
	color: green;
}
</style>
