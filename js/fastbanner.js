		var objulimgs = $(".box3_photos_1s ul");
		var objkzulimgs =$(".box3_ul_1s").children("ul");
		var objnerong = $(".box3_ul_1s").children("h2");
		bojnr = objulimgs.children().eq(0).children().children("img").attr("alt");
		objnerong.text(bojnr);
		var numis=0;
		objulimgs.children().eq(0).css("display","block");
		objkzulimgs.children().eq(0).css("background","#ff6600");
		objkzulimgs.children().mousemove(function(){
			numis = $(this).index();
			$(this).css("background","#ff6600");
			$(this).siblings().css("background","#FFFFFF");
			objulimgs.children().eq(numis).fadeIn().siblings().fadeOut();
			bojnr = objulimgs.children().eq(numis).children().children("img").attr("alt");
			objnerong.text(bojnr);
		});
		var lbtimes = setInterval(show,3000);
		function show(){
			numis ++;
			if(numis >4){
				numis =0;
			}
			bojnr =objulimgs.children().eq(numis).children().children("img").attr("alt");
			objnerong.text(bojnr);
			objulimgs.children().eq(numis).css("display","block").siblings().fadeOut();
			objkzulimgs.children().eq(numis).css("background","#ff6600");
			objkzulimgs.children().eq(numis).siblings().css("background","#FFFFFF")
		}