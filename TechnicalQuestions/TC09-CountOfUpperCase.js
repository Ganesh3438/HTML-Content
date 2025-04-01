let name = "He did an Excellent job";
		let count = 0;
		for(let i=0; i<name.length; i++) {
			
			let ch = name.charAt(i);
			
			if(ch>='A' && ch<='Z') {
				count++;
//				System.out.print(ch + " ");
			}
		}
        console.log(count)

		// System.out.println(count);