function main() 
{
	let scores = [[5,5,5,5],[10,10],[10,10],[10,10],[20]];
	let answer1 = ["统一建模语言","封装性","继承性","多态性"];
	let answer2 = ["UML参与到软件工程中软件开发过程的几个阶段","单继承"];
	let answer3 = [["概述级","需求级","子功能级"],["名称","属性","操作"]];
	let answer4 = ["wrong", "right"];
	let answer5 = ["模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"];
	let answer = [answer1,answer2,answer3,answer4,answer5];
	let pattern1 = 'input[name="part1"]';
	let pattern2 = 'input[class="radio"]:checked';
	//let pattern2 = 'input[class="radio"][checked]';此句与上句是不同的
	let pattern3 = 'input:checkbox:checked';
	let pattern4 = 'input[class="inlineRadio"]:checked';
	let pattern5 = 'textarea';
	let pattern = [pattern1, pattern2, pattern3, pattern4, pattern5];
	let check = makeCheck();
	if (check) {
		let sumScores = getSumResult(answer, pattern, scores);
		console.log(sumScores[0]);
		console.log(sumScores[1]);
		console.log(sumScores[2]);
		console.log(sumScores[3]);
		console.log(sumScores[4]);
		//alert(sumScores.length);
		outputScore(sumScores);
	}
	
}
function test() {
	/*
	let score = [10,10];
	let answer = ["wrong", "right"];
	let pattern = 'input[class="inlineRadio"]:checked';
	let result = getChildResult(answer, pattern, score);
	alert(result[0]+result[1]);
	/*let score = [10,10];
	let answer = ["UML参与到软件工程中软件开发过程的几个阶段","单继承"];
	let pattern = 'input[class="radio"][checked]';
	let result = getChildResult(answer, pattern, score);
	alert(result[0]+result[1]);
	let score = [10,10];
	let answer = [["概述级","需求级","子功能级"],["名称","属性","操作"]];
	let pattern = 'input:checkbox:checked';
	let result = getChildResult(answer, pattern, score);
	alert(result[0]+result[1]);
	let score = [20];
	let answer = ["模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"];
	let pattern = 'textarea';
	let result = getChildResult(answer, pattern, score);
	alert(result[0]);*/
}
function makeCheck()
{  
 //let x = document.getElementsByTagName('input');
	if(document.getElementById("classno").value=="")  {
		alert("请输入班级！");  
		return false;
	}else if(document.getElementById("stuid").value==""){
		alert("请输入学号！")  
		return false;  
	}else if(document.getElementById("name").value==""){
		alert("请输入姓名！")  
		return false;  
	}
	
	return true;
}

function getSumResult(answer, pattern, scores) {
	let result = [];
	for (let i = 0; i < pattern.length; i++) {
		let childResult = getChildResult(answer[i], pattern[i], scores[i]);
		result.push(childResult);
	}
	return result;
}

function getChildResult(answer, pattern, score) {
	let result = [];
	let arrays = [];
	let elements = $(pattern);
	if (elements.length !== 0){
		if(elements[0].type == "checkbox") {
			let array = [];
			let val = elements[0].name;
			for (let i = 0; i < elements.length; i++) {
				if (elements[i].name == val) {
					array.push(elements[i].value);
				} else {
					arrays.push(array);
					val = elements[i].name;
					array = [];
					array.push(elements[i].value);
				}
			}
			arrays.push(array);
		} else {
			for (let i = 0; i < elements.length; i++) {
				arrays.push(elements[i].value);
			}
		}
		for (let i = 0; i < answer.length; i++) {
			if (arrays[i].toString() == answer[i].toString()) {
				result.push(score[i]);
			} else {
				result.push(0);
			}
		}
	} else {
		for (let i = 0; i < answer.length; i++) {
				result.push(0);
		}
	}
	
	return result;
}



function outputScore(sumScores) {
	let studentClass = document.getElementById("classno").value;
    let studentNumber = document.getElementById("stuid").value;
    let studentName = document.getElementById("name").value;
	let Sum = sumScores.map(function(element) {
		return element.reduce(function(a, b) {
			return a + b;
		});
	}).reduce(function(a, b) {
		return a + b;
	});
	alert("班级：" + studentClass + "\n" + "学号：" + studentNumber + "\n" + "姓名：" + studentName + "\n" + "成绩："  + Sum);
}
