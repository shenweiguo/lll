$(function(){
	
	$("[name=name1]").each(function(i){
		$(this).mouseenter(function(){
			$("[name=name1]").attr("class","pitch_no");
			$(this).attr("class","pitch_yes");
			$("[id^=show_]").hide();
			$("#show_"+(i+1)).show();
			if(i==0){
				$("[id^=show_]").show();
			}
		})
		
			
	})
	//非常推荐
	$("[name=name2]").each(function(i){
		$(this).mouseenter(function(){
			$("[name=name2]").attr("class","subject2_right_no");
			$(this).attr("class","subject2_right_yes");
			$("[id^=div_]").hide();
			$("#div_"+(i+1)).show();
		})
		if(i==0){
			$(this).mouseenter();
		}
	})
	//出境游导航切换
	$("[name=name3]").each(function(i){
		
		$(this).mouseenter(function(){
			
			$("#subhied ul").attr("class","subject3_left1_top_2_2_no");
			$(this).parent().attr("class","subject3_left1_top_2_2_yes");
			
			$("[id^=sub3_]").hide();
			$("#sub3_"+(i+1)).show();
		})
		if(i==1){
			$(this).mouseenter();
		}
	})
	
	//国内旅游
	$("[name=name4]").each(function(i){
		$(this).mouseenter(function(){
			$("#subhied1 ul").attr("class","subject3_left1_top_2_2_no")
			$(this).parent().attr("class","subject3_left1_top_2_2_yes");
			$("[id^=sub4_]").hide();
			$("#sub4_"+(i+1)).show();
		})
		if(i==0){
			$(this).mouseenter();
		}
	})
	
	//周边旅游
	$("[name=name5]").each(function(i){
		$(this).mouseenter(function(){
			
			$("#subhied2 ul").attr("class","subject3_left1_top_2_2_no")
			$(this).parent().attr("class","subject3_left1_top_2_2_yes");
			$("[id^=sub5_]").hide();
			$("#sub5_"+(i+1)).show();
		})
		if(i==1){
			$(this).mouseenter();
		}
	})	
})
function cha(num){
	$("[name=name1]").eq(num).attr("class","pitch_yes");
}
