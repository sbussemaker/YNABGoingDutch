/**
 *
 * @param text {string}
 * @param options {[]}
 * @param callback {Function}
 * @param acceptText {string}
 * @param cancelText {string}
 * @constructor
 */
const SelectionPopup = function (text, options, callback, acceptText = "accept", cancelText = "cancel") {
    const element = document.createElement("div");
    const textElement = document.createElement("p");
    const acceptButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    const selection = document.createElement("select");

    const close = () => {
        document.body.removeChild(element);
    };

    const init = () => {
        element.id = SelectionPopup.ID;

        let index = 0;
        for (const option in options) {
            const optionElement = document.createElement("option");
            optionElement.value = (index++).toString();
            optionElement.innerText = option;
            selection.append(optionElement);
        }

        textElement.innerText = text;
        acceptButton.innerText = acceptText;
        cancelButton.innerText = cancelText;

        acceptButton.addEventListener("click", (event) => {
            callback(selection.value);
            close();
        });

        cancelButton.addEventListener("click", (event) => {
            callback(null);
            close();
        });

        element.append(textElement);
        element.append(selection);
        element.append(cancelButton);
        element.append(acceptButton)
        document.body.append(element);
    };

    init();
}


SelectionPopup.ID = "selection-popup"