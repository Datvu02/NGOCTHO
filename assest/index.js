$(document).ready(function(){
	$('.timeline_show').on('mouseenter',function(){
		console.log($(this).index()-2)
		if ($(this).index()-2==8) {
			$('.timline_high_show').eq(5).show(500);
		}else if ($(this).index()-2==9) {
			$('.timline_high_show').eq(6).show(500);
		}else if ($(this).index()-2==10) {
			$('.timline_high_show').eq(7).show(500);
		}
		$('.timline_high_show').eq($(this).index()-2).show(500);
	})
	$('.timeline_show').on('mouseleave',function(){
		if ($(this).index()-2==8) {
			$('.timline_high_show').eq(5).toggle(500);
		}else if ($(this).index()-2==9) {
			$('.timline_high_show').eq(6).toggle(500);
		}else if ($(this).index()-2==10) {
			$('.timline_high_show').eq(7).toggle(500);
		}
		$('.timline_high_show').eq($(this).index()-2).toggle(500);
	})
})