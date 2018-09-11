		var write = document.querySelector(".contacts-btn");
		var popup = document.querySelector(".write-us");
		var close = document.querySelector(".btn-close");
		var yourname = popup.querySelector("[name=name]");
		var form = popup.querySelector("form");
		var mail = popup.querySelector("[name=mail]");
		var text = popup.querySelector(".fix-area");
		var isStorageSupport = true;
		var storage = "";

		try {
			storage = localStorage.getItem("yourname");
		} catch (err) {
			isStorageSupport = false;
		}
		write.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");

			if (storage) {
				yourname.value = storage;
				text.focus();
			} else {
				yourname.focus();
			}
		});
		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		});
		form.addEventListener("submit", function (evt) {
			if (!yourname.value || !mail.value || !text.value) {
				evt.preventDefault();
				popup.classList.remove("modal-error");
				popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("modal-error");
			} else {
				if (isStorageSupport) {
					localStorage.setItem("yourname", yourname.value);
				}
			}
		});
		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (popup.classList.contains("modal-show")) {
					popup.classList.remove("modal-show");
					popup.classList.remove("modal-error");
				}
			}
		});
