function display_counter_life(i, step, tmp)
{
	setTimeout(function()
	{
		document.querySelector('#hp').innerHTML = (tmp + (step * i))
	},  10 * i);
}

function changeValueBar(type, value)
{
	let tmp_value = parseInt(document.querySelector('#hp').innerHTML);
	let	step;
	let	i;

	step = (tmp_value < value) ? +1 : -1;
	if (value < 0 || value > 100)
		return
	i = -1;
	if (type == "life")
		while (++i <= Math.abs(tmp_value - value))
			display_counter_life(i, step, tmp_value)
	document.querySelector('#' + type + '_bar').style.width = value + "%"
	document.querySelector('#' + type + '_bar_2').style.width = ((parseInt(value) - 6) < 0 ? 0 : (parseInt(value) - 6)) + "%"
}

function display_counter_money(i, step, tmp)
{
	setTimeout(function()
	{
		document.querySelector('#money .value').innerHTML = (tmp + (step * i))
	},  i);
}

function changeValueMoney(value)
{
	let tmp_value = parseInt(document.querySelector('#money .value').innerHTML);
	let diff = Math.abs(tmp_value - value);
	let	step;
	let	i;
	let percent;

	if (value < -1)
		return
	percent = diff.toString().length;
	step = (tmp_value < value) ? +1 : -1;
	i = 0;
	while (i <= Math.abs(tmp_value - value))
	{
		display_counter_money(i, step, tmp_value)
		i += percent;
	}
}