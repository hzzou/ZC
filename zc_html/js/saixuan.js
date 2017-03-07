$(document).ready(function(){
							
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}  
	});
	$("#select1 span #cusbtn").click(function () {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
	});
	
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});
	
	$("#select4 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectD").remove();
		} else {
			var copyThisD = $(this).clone();
			if ($("#selectD").length > 0) {
				$("#selectD a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisD.attr("id", "selectD"));
			}
		}
	});
	
	$("#select5 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectE").remove();
		} else {
			var copyThisE = $(this).clone();
			if ($("#selectE").length > 0) {
				$("#selectE a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisE.attr("id", "selectE"));
			}
		}
	});
	
	$("#select6 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectF").remove();
		} else {
			var copyThisF = $(this).clone();
			if ($("#selectF").length > 0) {
				$("#selectF a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisF.attr("id", "selectF"));
			}
		}
	});
	
	$("#select7 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectG").remove();
		} else {
			var copyThisG = $(this).clone();
			if ($("#selectG").length > 0) {
				$("#selectCG a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisG.attr("id", "selectG"));
			}
		}
	});
	
	$("#select8 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectH").remove();
		} else {
			var copyThisH = $(this).clone();
			if ($("#selectH").length > 0) {
				$("#selectH a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisH.attr("id", "selectH"));
			}
		}
	});
	
	$("#select9 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectI").remove();
		} else {
			var copyThisI = $(this).clone();
			if ($("#selectI").length > 0) {
				$("#selectI a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisI.attr("id", "selectI"));
			}
		}
	});
	
	$("#select10 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectJ").remove();
		} else {
			var copyThisJ = $(this).clone();
			if ($("#selectJ").length > 0) {
				$("#selectJ a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisJ.attr("id", "selectJ"));
			}
		}
	});
	
	$("#select11 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectK").remove();
		} else {
			var copyThisK = $(this).clone();
			if ($("#selectK").length > 0) {
				$("#selectK a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisK.attr("id", "selectK"));
			}
		}
	});
	
	$("#select12 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectL").remove();
		} else {
			var copyThisL = $(this).clone();
			if ($("#selectL").length > 0) {
				$("#selectL a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisL.attr("id", "selectL"));
			}
		}
	});
	
	$("#select13 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectM").remove();
		} else {
			var copyThisM = $(this).clone();
			if ($("#selectM").length > 0) {
				$("#selectM a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisM.attr("id", "selectM"));
			}
		}
	});
	
	$("#selectA").live("click", function(){
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function(){
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function(){
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectD").live("click", function(){
		$(this).remove();
		$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectE").live("click", function(){
		$(this).remove();
		$("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectF").live("click", function(){
		$(this).remove();
		$("#select6 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectG").live("click", function(){
		$(this).remove();
		$("#select7 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectH").live("click", function(){
		$(this).remove();
		$("#select8 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectI").live("click", function(){
		$(this).remove();
		$("#select9 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectJ").live("click", function(){
		$(this).remove();
		$("#select10 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectK").live("click", function(){
		$(this).remove();
		$("#select11 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectL").live("click", function(){
		$(this).remove();
		$("#select12 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectM").live("click", function(){
		$(this).remove();
		$("#select13 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(".select dd").live("click", function(){
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
	
});