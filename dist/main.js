$(function(){
	
	var sidebarFixed =function(){
		var client =document.documentElement.clientHeight;
		var sidebar = document.getElementsByClassName('sidebar')[0];
		var sidebarheight = sidebar.offsetHeight;
		SCroll ();
		window.onscroll=function(){
			SCroll ();
		};
		function SCroll (){
			var scolltop = document.documentElement.scrollTop;
			var height = scolltop+client;
			if(height>=sidebarheight){
				sidebar.style.cssText='position:fixed; top:'+(-(sidebarheight-client))+'px';


			}else{
				sidebar.style.cssText="position:absolute; top:+'0'+px";
			}
		}
	};

	new sidebarFixed();
});