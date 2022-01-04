window.addEventListener("DOMContentLoaded", function() {
	let colorField = document.getElementById("color-field")
	let previewBox = document.getElementById("preview-box")

	setBoxColor(previewBox, addHexSymbol(normalize(colorField.value)))

	colorField.addEventListener("input", function (event) {
		let color = normalize(colorField.value)

		if (color.length < 6) {
			return
		}

		setBoxColor(previewBox, addHexSymbol(color))
	})
})

function normalize(input) {
	return input.trim()
}

function setBoxColor(box, color) {
	box.style.setProperty("background-color", color)
}

function addHexSymbol(color) {
	return "#" + color
}
