var songs=[
	{name:'一剪梅',url:'http://47.98.178.251/2018yearshow/music/%E4%B8%80%E5%89%AA%E6%A2%85.mp4',strartTime:'111',endTime:'2',needPause:true},
]
var audio ;

function init() {
	for(var i=0;i<songs.length;i++){
		console.log("获取到的节点："+songs[i].name+songs[i].url+songs[i].strartTime+songs[i].endTime);
		var str="<li id=\"back"+i+"\" class=\"list-group-item\">	  	<div class=\"container\">  <div class=\"row\">    <div class=\"col-sm-6\" style=\"font-size: 20px\">    "+songs[i].name+"    </div>    <div class=\"col-sm-3\">      <button  class=\"btn btn-success\" style=\"width: 100%;height: 50px\" id=\"play"+i+"\"  onclick=\"playMusic("+i+")\">播放</button>    </div>    </div></div>	  </li>";
		$("#songlist").append(str);
	}
	
}

function playMusic(i) {
	var musicPlayer=$("#musicPlayer");
	if(!songs[i].needPause){
		musicPlayer.attr('src', songs[i].url);
		musicPlayer.currentTime =50;
		musicPlayer.get(0).play();
		return;
	}

	console.log($("#play"+i).html());
	if($("#play"+i).html()=="播放"){
		initButton("播放");
		$("#play"+i).html("停止");
		//获取播放节点
		musicPlayer.attr('src', songs[i].url);
		musicPlayer.get(0).play();
	}else{
		$("#play"+i).html("播放");
		musicPlayer.get(0).pause();
		
	}


}

function initButton(s){
	for(var i=0;i<songs.length;i++){
		$("#play"+i).html(s);
	}
}

function initEvents(){

	$('#musicPlayer').on('ended', function() {
   		initButton("播放");
	});
}

$(function(){
	console.log("开始获取节点。。。");
	init();
	initEvents();

});

