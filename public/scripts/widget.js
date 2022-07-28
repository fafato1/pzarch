

function treta() {
    const testwid = new WinBox({
            title: "Infos",
			width: "400px",
			height: "400px",
			border: "0.2em",
			x: "right",
			y: "bottom",
			mount: document.getElementById("texto"),
			class: ["no-move", 
                    "no-full", 
                    "no-max", 
                    "no-close"],
		});
}
