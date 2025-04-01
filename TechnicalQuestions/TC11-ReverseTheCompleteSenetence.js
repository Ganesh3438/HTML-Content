let name = "Powerful is Java";
		let words = name.split(" ");
		let temp = "";
		
		for(let i=words.length-1; i>=0; i--) {
			
			if(i==0) {
				temp = temp + words[i];
			}else {
				temp = temp + words[i] + " ";
			}
		}
		
		
		console.log(temp);