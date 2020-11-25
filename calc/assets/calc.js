jQuery['noConflict']();
	(function ($){

		$(function (){
			$['fn']['styleTable']=function (_0x193ex2){
				var _0x193ex3={css:'ui-styled-table'};
				_0x193ex2=$['extend'](_0x193ex3,_0x193ex2);
				return this['each'](function (){
					$this=$(this);
					$this['addClass'](_0x193ex2['css']);
					$this['on']('mouseover mouseout','tbody tr',function (_0x193ex4){
						$(this)['children']()['toggleClass']('ui-state-hover',_0x193ex4['type']=='mouseover');
					});

					$this['find']('th')['addClass']('ui-state-default');
					$this['find']('td')['addClass']('ui-widget-content');
					$this['find']('tr:last-child')['addClass']('last-child');
				});
			};

			var amount_slider_value;
			$('#amount_slider')['slider']({
				orientation:'horizontal',
				range:'min',
				min:10000,
				max:15000000,
				value:2500000,
				step:5000,
				slide:function (_0x193ex4,_0x193ex6){
					$('#fpay_slider')['slider']('option','max',_0x193ex6['value']);
					$('#amount')['val'](_0x193ex6['value']);
					$('.ui-slider .ui-slider-range:first-child').hide();
					_0x193exf();
				}
			});

			$('#amount')['val']($('#amount_slider')['slider']('value'));
			amount_slider_value=$('#amount_slider')['slider']('value');
			$('#interest_slider')['slider']({
				orientation:'horizontal',
				range:'min',
				min:1,
				max:50,
				value:20,
				step:0.25,
				slide:function (_0x193ex4,_0x193ex6){
					$('#interest')['val'](_0x193ex6['value']);
					$('.ui-slider .ui-slider-range:first-child').hide();
					_0x193exf();
				}
			});

			$('#interest')['val']($('#interest_slider')['slider']('value'));
			$('#time_slider')['slider']({
				orientation:'horizontal',
				range:'min',
				min:1,
				max:180,
				value:85,
				slide:function (_0x193ex4,_0x193ex6){
					$('#time')['val'](_0x193ex6['value']);
					$('.ui-slider .ui-slider-range:first-child').hide();
					_0x193exf();
				}
			});

			$('#time')['val']($('#time_slider')['slider']('value'));
			$('#fpay_slider')['slider']({
				orientation:'horizontal',
				range:'min',
				min:0,
				max:amount_slider_value,
				value:0,
				step:1000,
				slide:function (_0x193ex4,_0x193ex6){
					$('#fpay')['val'](_0x193ex6['value']);
					$('.ui-slider .ui-slider-range:first-child').hide();
					_0x193exf();
				}
			});

			$('#fpay')['val']($('#fpay_slider')['slider']('value'));
			$('input')['keyup'](function (){
				var _0x193ex7=$(this)['attr']('id');
				_0x193ex7='#'+_0x193ex7+'_slider';
				$(_0x193ex7)['slider']('value',parseInt(this['value']));
				if(_0x193ex7=='#amount_slider'){
					$('#fpay_slider')['slider']('option','max',parseInt(this['value']));
				};
			});

			$('input:radio')['change'](function (){
				_0x193exf();
			});

			var _0x193ex8=210;
			var _0x193ex9=0;
			$('.tool')['tooltip']({
				show:null,
				position:{
					my:'left top',
					at:'left bottom'
				},
				open:function (_0x193ex4,_0x193ex6){
					_0x193ex6['tooltip']['animate']({top:_0x193ex6['tooltip']['position']()['top']+10},'fast');
				}
			});

			$('.year')['live']('click',function (_0x193exa){
				$('#result table')['each'](function (){
					$(this)['hide']();
				});

				$('#years a')['each'](function (){
					$(this)['removeClass']('active');
				});

				_0x193ex9=_0x193exc(0);
				var _0x193exb=$(this)['attr']('id');
				$('#y'+_0x193exb)['show']();
				$(this)['addClass']('active');
			});

			$('#result')['css']({"\x6F\x76\x65\x72\x66\x6C\x6F\x77":'hidden'});
			$('#result')['css']({"\x68\x65\x69\x67\x68\x74":'215px'});
			$('#show_full')['click'](function (_0x193exa){
				_0x193exa['preventDefault']();
				$('#result table')['each'](function (){
					$(this)['hide']();
				});

				$('#y1')['show']();
				_0x193ex9=_0x193exc(_0x193ex9);
			});

			function _0x193exc(_0x193ex9){
				if(_0x193ex9==0){
					$('#result')['css']({"\x6F\x76\x65\x72\x66\x6C\x6F\x77":'visible'});
					$('#result')['css']({"\x68\x65\x69\x67\x68\x74":'auto'});
					$('#show_full')['html']('\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u0440\u0430\u0442\u043A\u0438\u0439 &#9650;');
					$('#result_last')['hide']();
					$('.controls')['animate']({height:'-='+_0x193ex8});
					$('.bg')['hide']();
					_0x193ex9=1;
				} else {
					$('#result')['css']({"\x6F\x76\x65\x72\x66\x6C\x6F\x77":'hidden'});
					$('#result')['css']({"\x68\x65\x69\x67\x68\x74":'215px'});
					$('#show_full')['html']('\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439 &#9660;');
					$('#result_last')['show']();
					$('.controls')['animate']({height:'+='+_0x193ex8});
					$('.bg')['show']();
					$('#years a')['each'](function (){
						$(this)['removeClass']('active');
					});

					_0x193ex9=0;
				};

				return _0x193ex9;
			};

			function _0x193exd(_0x193exa){
				var _0x193exe;
				switch(_0x193exa){
					case 6:;
					case 2:
						_0x193exe='-\u043E\u0439';
						break ;;
					case 3:
						_0x193exe='-\u0438\u0439';
						break ;;
					default:
						_0x193exe='-\u044B\u0439';
						break ;;
				};

				return _0x193exe;
			};

			function _0x193exf(){
				var $0=$('#amount')['val']();
				var $1=$('#interest')['val']()/1200;
				var $2=$('#time')['val']();
				var $3=$('#fpay')['val']();
				var $4=$('input[type="radio"]:checked')['val']();
				$0=$0-$3;
				var $5;
				var $6={total:0,overpay:0,payments:[],overpays:[]};
				var $7='<thead><tr>';
				$7+='<td>\u041C\u0435\u0441\u044F\u0446</td>';
				$7+='<td>\u041F\u043B\u0430\u0442\u0435\u0436</td>';
				$7+='<td>\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432</td>';
				$7+='<td>\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0434\u043E\u043B\u0433\u0430</td>';
				$7+='<td>\u041E\u0441\u0442\u0430\u0442\u043E\u043A</td>';
				$7+='</tr></thead>';

				// if($4=='annuitet'){
				$4 = 'annuitet'
					var $8=$1*Math['pow']((1+$1),$2)/(Math['pow']((1+$1),$2)-1);
					var $9=$2;
					var $a=$0*$8;
					var $b=$0;
					while($2){
						$6['payments']['push'](+($a)['toFixed'](2));
						$6['overpays']['push'](+($b*$1)['toFixed'](2));
						$b-=($a-$b*$1)['toFixed'](2);$2--;
					};

					$6['total']=($a*$9)['toFixed'](2);
					$6['overpay']=($6['total']-$0)['toFixed'](2);
					var $c='';
					var $d='';
					var $e=1;
					for(x=0;x<$6['payments']['length'];x++){
						if($6['payments'][x]<0){
							$6['payments'][x]=0;
						};

						$c+='<tr><td>'+(x+1)+'</td>';
						$c+='<td>'+$6['payments'][x]+'</td>';
						$c+='<td>'+$6['overpays'][x]+'</td>';
						$c+='<td>'+($6['payments'][x]-$6['overpays'][x])['toFixed'](2)+'</td>';
						$0-=($6['payments'][x]-$6['overpays'][x])['toFixed'](2);
						$c+='<td>'+$0['toFixed'](2)+'</td></tr>';
						// if((x+1)%12===0&&($9-(x+1))!=0){
						// 	$e++;
						// 	$c+='</table><table class="calcdata" id="y'+$e+'">';
						// 	$c+=$7;
						// 	$d+='<a href="#" class="year ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="'+$e+'">'+$e+_0x193exd($e)+' \u0433\u043E\u0434</a>';
						// };
					};

					$('#result')['html']('<table class="calcdata" id="y1">'+$7+$c+'</table>');
					$d='<a href="#" class="year ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="1">1-\u044B\u0439 \u0433\u043E\u0434</a>'+$d;
					var $f='<table class="short calcdata"><tr>';
					$f+='<td>\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436</td>';
					$f+='<td>'+($a)['toFixed'](2)+'</td></tr>';
					$f+='<tr><td>\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u043C</td>';
					$f+='<td>'+$6['overpay']+'</td></tr></table>';
					$('#info')['html']($f);
					var _0x193ex20='<div style="text-align:center;">...</div><table class="short calcdata"><tr>';
					_0x193ex20+='<td>'+($6['payments']['length'])+'</td>';
					_0x193ex20+='<td>'+($6['payments'][$6['payments']['length']-1])['toFixed'](2)+'</td>';
					_0x193ex20+='<td>'+$6['overpays'][$6['payments']['length']-1]+'</td>';
					_0x193ex20+='<td>'+($6['payments'][$6['payments']['length']-1]-$6['overpays'][$6['payments']['length']-1])['toFixed'](2)+'</td>';
					_0x193ex20+='<td>0</td></tr></table>';
					$('#result_last')['html'](_0x193ex20);
				// };


// Только аннуитетные

				// } else {
				// 	while($2){
				// 		$5=$6['payments']['length'];
				// 		var _0x193ex21=$0/$2;
				// 		var _0x193ex22=$0*$1;
				// 		$6['overpay']+=_0x193ex22;
				// 		$6['payments']['push'](+(_0x193ex21+_0x193ex22)['toFixed'](2));
				// 		$6['overpays']['push'](+(_0x193ex22)['toFixed'](2));
				// 		$6['total']+=$6['payments'][$5];
				// 		$2--;
				// 		$0-=_0x193ex21;
				// 	};

				// 	$6['total']=$6['total']['toFixed'](2);
				// 	$6['overpay']=$6['overpay']['toFixed'](2);
				// 	var $b=0;
				// 	var $f='<table class="short calcdata"><tr>';
				// 	$f+='<td>\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436</td>';
				// 	$f+='<td>'+$6['payments'][0]+' ... '+$6['payments'][$6['payments']['length']-1]+'</td></tr>';
				// 	$f+='<tr><td>\u041F\u0435\u0440\u0435\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u043C</td>';
				// 	$f+='<td>'+$6['overpay']+'</td></tr></table>';
				// 	var _0x193ex23='<table class="calcdata" id="y1">'+$7;
				// 	var $d='';
				// 	var $e=1;
				// 	for(x=0;x<$6['payments']['length'];x++){
				// 		if($6['payments'][x]<0){
				// 			$6['payments'][x]=0;
				// 		};

				// 		$b+=$6['payments'][x]-$6['overpays'][x];
				// 		_0x193ex23+='<tr><td>'+(x+1)+'</td>';
				// 		_0x193ex23+='<td>'+$6['payments'][x]+'</td>';
				// 		_0x193ex23+='<td>'+$6['overpays'][x]+'</td>';
				// 		_0x193ex23+='<td>'+($6['payments'][x]-$6['overpays'][x])['toFixed'](2)+'</td>';
				// 		_0x193ex23+='<td>'+($6['total']-$6['overpay']-$b)['toFixed'](2)+'</td></tr>';
				// 		if((x+1)%12===0&&$5-x!=0){
				// 			$e++;_0x193ex23+='</table><table class="calcdata" id="y'+$e+'">';
				// 			_0x193ex23+=$7;
				// 			$d+='<a href="#" class="year ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="'+$e+'">'+$e+_0x193exd($e)+' \u0433\u043E\u0434</a>';
				// 		};
				// 	};

				// 	$d='<a href="#" class="year ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" id="1">1-\u044B\u0439 \u0433\u043E\u0434</a>'+$d;
				// 	$('#years')['html']($d);var _0x193ex20='<div style="text-align:center;">...</div><table class="short calcdata"><tr>';
				// 	_0x193ex20+='<td>'+($6['payments']['length'])+'</td>';
				// 	_0x193ex20+='<td>'+$6['payments'][$6['payments']['length']-1]+'</td>';
				// 	_0x193ex20+='<td>'+$6['overpays'][$6['payments']['length']-1]+'</td>';
				// 	_0x193ex20+='<td>'+($6['payments'][$6['payments']['length']-1]-$6['overpays'][$6['payments']['length']-1])['toFixed'](2)+'</td>';
				// 	_0x193ex20+='<td>0</td>';
				// 	_0x193ex20+='</tr></table>';
				// 	$('#result_last')['html'](_0x193ex20);
				// 	$('#info')['html']($f);$('#result')['html'](_0x193ex23);
				// };

				$('.calcdata')['styleTable']();
			};

			_0x193exf();
			$('.calcdata')['styleTable']();
		});
})(jQuery);