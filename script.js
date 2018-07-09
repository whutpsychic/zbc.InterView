
//获得随机数组函数
//num 数组中有几个数
//min 最小值
//max 最大值
//x 小数点后几位
function getRandomArr(num, min, max, x) {

	let _arr = [];

	if (!x) x = 0;

	for (let i = 0; i < num; i++) {

		let _x = parseInt(((max - min) * Math.random() + min).toFixed());

		_arr.push(_x);
	}

	return _arr;
}

//交换数组量元素的位置(改变原数组)
function changePosition(arr, index1, index2) {
	let _temp = NaN;
	_temp = arr[index2];
	arr[index2] = arr[index1];
	arr[index1] = _temp;
}

//把一个元素从一个数组中删除（对下标删除）
function deleteFrom(i, arr) {

	arr.splice(arr[i]);

}

//把一个元素从一个数组中删除（对元素删除）
function deleteFrom2(x, arr) {

	let k = 0;

	for (let i = 0; i < arr.length; i++) {

		k++;
		if (arr[i] === x) {
			arr.splice(i, 1);
			break;
		}
	}

	console.log("本次（deleteFrom2）查找一共进行了" + k + "次");
}

//查找数组中最大元素
function getMaxFromArr(arr) {

	let _res = NaN;

	_res = Math.max.apply(null, arr);

	return _res;
}

//查找数组中最小元素
function getMaxFromArr(arr) {

	let _res = NaN;

	_res = Math.min.apply(null, arr);

	return _res;
}






/***********************************************************************************/

/*********************冒泡排序***********************/

function bubbleSort(arr) {

	let j = 0;

	//冒泡过程
	for (let i = 0; i < arr.length; i++) {

		if (i < 0) {
			continue;
		};
		j++;
		console.log('比较第 ' + i + ' 个和第 ' + (i + 1) + " 个");

		if (arr[i] > arr[i + 1]) {
			changePosition(arr, i, i + 1);
			if (i === 0) continue;
			i -= 2;
		}
	}

	console.log("总共进行了" + j + "次比较计算");
}

/*********************选择排序***********************/

function selectSort(arr) {

	let _arr = [];

	while (arr.length > 1) {
		let _num = getMaxFromArr(arr);
		deleteFrom2(_num, arr);
		_arr.push(_num);
	}

	_arr.push(arr[0]);

	return _arr;
}

/*********************快速排序***********************/

function quickSort(_arr) {

	if (_arr.length <= 1) return _arr;

	//快排过程
	//选一个基准，并把小于此基准的数放左侧，大于此基准的数放右侧
	let _arr1 = [], _arr2 = [], _arr3 = [];

	let benchMark = _arr[parseInt(_arr.length / 2) - 1];

	for (let i = 0; i < _arr.length; i++) {
		if (_arr[i] < benchMark)
			_arr1.push(_arr[i]);
		else if (_arr[i] > benchMark)
			_arr2.push(_arr[i]);
		else if (_arr[i] === benchMark)
			_arr3.push(_arr[i]);
	}

	//console.log(_arr1, _arr2, _arr3);

	return quickSort(_arr1).concat(_arr3, quickSort(_arr2));
}


var arr1 = getRandomArr(10, 1, 100);

console.log(arr1);

//bubbleSort(arr1);

//arr1 = selectSort(arr1);

arr1 = quickSort(arr1);









console.log(arr1);





