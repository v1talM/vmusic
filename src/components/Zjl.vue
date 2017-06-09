<template lang="html">
    <div class="col-md-8 singer-container zjl">
      <div style="width:100%">
  			<img class="pic1" src="./../assets/img/sky.jpg" />
  		</div>
  		<div class="box">
  			<img class="pic2" src="./../assets/img/jay.jpg" />
  			<a href="#">周杰伦&nbsp;</a>
  			<a href="#">单曲1&nbsp;</a>
  			<a href="#">专辑0&nbsp;</a>
  			<a href="#">MV 0</a>
  			<input type="submit" value="▷播放歌手热门歌曲" class="submit1">
  		</div>
  		<div class="box1">
  			<a href="#">单曲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  			<a href="#">专辑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  			<a href="#">MV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  			<a href="#">歌单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  			<a href="#">歌词</a>
  		</div>
  		<table class="table">
        <thead>
          <tr>
    				<th>歌曲</th>
    				<th>专辑</th>
    				<th>时长</th>
    			</tr>
        </thead>
  			<tbody>
          <tr>
            <td>1 、 双节棍（Live）</td>
            <td>中国新歌声第一季 总决赛</td>
            <td> 03:17</td>
          </tr>
          <tr>
            <td>2、 算什么男人 (Live)</td>
            <td>中国新歌声 第14期 国庆演唱会</td>
            <td>04:47</td>
          </tr>
          <tr>
            <td>3 、 告白气球 (Live)</td>
            <td>中国新歌声 第14期 国庆演唱会</td>
            <td>03:32</td>
          </tr>
          <tr>
            <td>4 、 青花瓷</td>
            <td>我很忙</td>
            <td>03:59</td>
          </tr>
          <tr>
            <td>5、 明明就</td>
            <td>十二新作</td>
            <td>04:20</td>
          </tr>
          <tr>
            <td>6、 说好的幸福呢</td>
            <td>魔杰座</td>
            <td>04:16</td>
          </tr>
          <tr>
            <td>7、稻香</td>
            <td>魔杰座</td>
            <td>03:43</td>
          </tr>
          <tr>
            <td>8、 给我一首歌的时间</td>
            <td>魔杰座</td>
            <td>04:49</td>
          </tr>
          <tr>
            <td>9、 红尘客栈</td>
            <td>十二新作</td>
            <td>04:20</td>
          </tr>
  			</tbody>
  		</table>
      <div style="position:relative;text-align:right">
        <a id="aaa">下一页</a>
      </div>

  		<p>MV</p>
  		<div class="box2">
        <div class="mv-container">
          <img src="./../assets/img/bugai.jpg" />
    			<a>不该</a>
        </div>

        <div class="mv-container">
  		    <img src="./../assets/img/gbqq.jpg" />
  		    <a>告白气球</a>
        </div>
        <div class="mv-container">
  		    <img src="./../assets/img/qsqr.jpg" />
  		    <a>前世情人</a>
        </div>
  		</div>
      <div style="position:relative;text-align:right">
        <a id="aaa">下一页</a>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.zjl .pic1 {
	width: 100%;
	height: 187px;
}

.zjl .pic2 {
	height: 100px;
	width: 100px;
	border-radius: 50%;
	float: left;
	margin-top: 20px;
	margin-left: 30px;
}

.zjl .box a {
	margin-top: 30px;
	margin-left: 30px;
	float: left;
}

.zjl a {
	cursor: pointer;
	font-family: "微软雅黑";
	color: black;
	text-decoration: none;
}
.zjl a:hover {
	color: green;
}
.zjl .submit1 {
	background: palegreen;
	font-size: 12px;
	border-radius: 3px;
	margin-left: -270px;
	margin-top: 70px;
  color: #fff;
  line-height: 31px;
  height: 31px;
}
.zjl .submit1:hover {
	background: green;
	font-family: "微软雅黑";
	cursor: pointer;
}
.zjl .box1 {

  font-size: 20px;
	margin: 40px 0;

}
.zjl .box1 a:first-child{
	margin-left: 30px;
}
.zjl .submit2{
	background: red;
	font-size: 18px;
	border-radius: 10px;
	margin-left: -270px;
	margin-top: 70px;
	color: black;
}
.zjl .table{
	width:100%;
  color: #222222;
}
.zjl .table>tbody>tr{
	line-height: 2;
}
.zjl .table > tbody > tr:nth-child(odd){
	background-color: whitesmoke;
}
.zjl .table > tbody > tr:nth-child(even){
	background-color: #dddcdd;
}
.zjl .table> tbody > tr > td:hover{
	cursor: pointer;
	color: grey;
}
.zjl p{
	font-size: 20px;
  color: #222222;
}
.zjl #aaa{
	display: inline-block;
  margin-right: 20px;
	font-size: 15px;
}
.zjl .box2{
	width: 100%;
  margin-bottom: 15px;
}

.zjl .box2 .mv-container{
	width: 30%;
	margin-left: 1%;
  height: 150px;
  display: inline-block;
  text-align: center;
}
.zjl .box2 .mv-container img{
  width: 100%;
  height: 100%;
}
.zjl img:hover{
	cursor: pointer;
}

</style>
