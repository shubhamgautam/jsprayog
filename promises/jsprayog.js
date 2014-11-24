/*Javascript se mere prayog :)*/

/*Promises*/
console.log ("Prayog begins right now");

var promiseCnt = 0;
 function promisetest(){
	var thisPromiseCnt = ++promiseCnt;
	var elem = document.getElementById('test');
	elem.insertAdjacentHTML('beforeend','<span class="item-norm">'+thisPromiseCnt+') started </span><br/>');
	
	var p1 = new Promise(
		// 
		function(resolve,reject){
			elem.insertAdjacentHTML('beforeend','<span class="item-norm">'+thisPromiseCnt+')started async code</span> <br/>');
			
			window.setTimeout(function(){
					//resolve(thisPromiseCnt);
					reject(thisPromiseCnt);  // uncomment to reject the promise
				}, 1000
			)
		}
	);
	
	p1.then(
		function(val){
				elem.insertAdjacentHTML('beforeend','<span class="item-pass">'+thisPromiseCnt+') async code terminated</span> <br/>');
		}
		
	);
	
	p1.catch(
		function(val){
				elem.insertAdjacentHTML('beforeend','<span class="item-failed">'+thisPromiseCnt+'> async code failed<br/></span>');
		}
		
	);
	
	
	elem.insertAdjacentHTML('beforeend','<span class="item-norm">'+thisPromiseCnt+'> sync code terminated</span><br/>');
	
 }
 
 promisetest();