
$(function(){
	//商品分类
	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
});

/*展开更多条件*/
$(function(){
	var show_more_btn=true;
	$('#show_more').click(function(){
			if(show_more_btn){
				show_more_btn=!show_more_btn;
				$('#show_more').addClass('hide_more');
				document.getElementById("show_more").innerHTML='展开更多选项';
				$('#show_more').removeClass('show_more');
				document.getElementById("show_more").innerHTML='收起更多选项';
				$('#gc_lb_list').animate({'height': $('#lb_list_box').height()});
			}else{
				show_more_btn=!show_more_btn;
				$('#show_more').removeClass('hide_more');
				document.getElementById("show_more").innerHTML='收起更多选项';
				$('#show_more').addClass('show_more');
				document.getElementById("show_more").innerHTML='展开更多选项';
				$('#gc_lb_list').animate({'height':'266px'},"normal");
			};
		}
	);
	
})

var show_more_btn=true;
function show_more_click(){
    if(show_more_btn){
        show_more_btn=!show_more_btn;
        $('#show_more').addClass('hide_more');
        $('#gc_lb_list').animate({'height': $('#lb_list_box').height()});
    }else{
        show_more_btn=!show_more_btn;
        $('#show_more').removeClass('hide_more');
        $('#gc_lb_list').animate({'height':'266px'},"normal");
    };
}

$(function(){
	var show_more=true;
	$('.else_box h1').click(function(){
			if(show_more){
				show_more=!show_more;
				$('#show').addClass('hide');
				document.getElementById("show").innerHTML='展开选项';
				$('#show').removeClass('show');
				document.getElementById("show").innerHTML='收起选项';
				$('#gc_lb_list').animate({'height': $('#lb_list_box').height()});
			}else{
				show_more=!show_more;
				$('#show').removeClass('hide');
				document.getElementById("show").innerHTML='收起选项';
				$('#show').addClass('show');
				document.getElementById("show").innerHTML='展开选项';
				$('#gc_lb_list').animate({'height':'36px'},"normal");
			};
		}
	);
	
})