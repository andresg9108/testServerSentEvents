document.addEventListener('DOMContentLoaded', (e) => {
    const sToken = 'asftuK';
    const oEventSource = new EventSource(`./php?token=${sToken}`);
    const iLimit = 10;
    let iCounter = 1;

	oEventSource.onmessage = (event) => {
		const oData = JSON.parse(event.data);

		if(oData.status === 1){
			const oLi = document.createElement('li');

			oLi.setAttribute('class', 'list-group-item bg-dark text-light');
			oLi.innerHTML = `Test #${iCounter}: ${oData.message}`;

			document.getElementById('mylist').appendChild(oLi);

			if(iCounter == iLimit){
				console.log('Close');
				oEventSource.close();
			}
			iCounter++;
		}else{
			console.log('Error');
			oEventSource.close();
		}
	};
});