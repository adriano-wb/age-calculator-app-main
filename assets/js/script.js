$(() => {
	const $labelDay = $("[for='dia']");
	const $labelMes = $("[for='mes']");
	const $labelYear = $("[for='ano']");
	const $inptDay = $("#dia");
	const $inptMonth = $("#mes");
	const $inptYear = $("#ano");
	const $inptBtn = $(".form-button");
	const exibirYrs = $(".result-text__data").eq(0);
	const exibirMth = $(".result-text__data").eq(1);
	const exibirDay = $(".result-text__data").eq(2);
	const $inptDayValue = $inptDay.val();
	const $inptMonthValue = $inptMonth.val();
	const $inptYearValue = $inptYear.val();
	const $formMsgError = $("#form-error");
	const $date = new Date();
	
	function validateForm() {
		
		if (!$inptDay.val() || !($inptDay.val() >= 1 && $inptDay.val() <= 31) || 
				$inptDay.val() == 31 && $inptMonth.val() != 2) {
			$formMsgError.show('slow');
			$inptDay.addClass("form-item__input--error");	
			$labelDay.addClass("form-item__label--error");
		} else {
			$formMsgError.hide('slow');
			$inptDay.removeClass("form-item__input--error");	
			$labelDay.removeClass("form-item__label--error");
			exibirDay.text($inptDay.val());
			exibirDay.addClass("result-text__data--preenchido");
		}
		
		 if (!$inptMonth.val() || !($inptMonth.val() >= 1 && $inptMonth.val() <= 12) || 
				$inptDay.val() == 31 && $inptMonth.val() != 2) {
			$formMsgError.show('slow');
			$inptMonth.addClass("form-item__input--error");	
			$labelMes.addClass("form-item__label--error");
		} else {
			$formMsgError.hide('slow');
			$inptMonth.removeClass("form-item__input--error");	
			$labelMes.removeClass("form-item__label--error");
			exibirMth.text($inptMonth.val());
			exibirMth.addClass("result-text__data--preenchido");
		}
		
		if (!$inptYear.val() || $inptYear.val() > $date.getFullYear() || 
				$inptDay.val() == 31 && $inptMonth.val() != 2) {
					
			$formMsgError.show('slow');
			$inptYear.addClass("form-item__input--error");	
			$labelYear.addClass("form-item__label--error");
		} else {
			$formMsgError.hide('slow');
			$inptYear.removeClass("form-item__input--error");	
			$labelYear.removeClass("form-item__label--error");
			exibirYrs.text($inptYear.val().slice($inptYear.val().length-2));
			exibirYrs.addClass("result-text__data--preenchido");
		} 
	}
	$inptBtn.on("click", validateForm);
})