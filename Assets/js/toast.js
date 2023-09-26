console.log('Toast')
const toastGj8 = document.querySelector(".toastGj8");

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'check_circle',
        text: 'Operacion realizada exitosamente',
    },
    error: {
        icon: 'cancel',
        text: 'Error: No se pudo realizar la operacion',
    },
    warning: {
        icon: 'warning',
        text: 'Cuidado: Hay un problema!',
    },
    info: {
        icon: 'info',
        text: 'Info: Mensaje informativo!',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

function createToast(id, content = 'Operacion realizada exitosamente') {
    // Getting the icon and text for the toast based on the id passed
    const {
        icon,
        text
    } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = ` <div class="column">
                            <span class="material-icons">${icon}</span>
                            <span>${ content }</span>
                        </div>
                        <span class="material-icons" onclick="removeToast(this.parentElement)">close</span>`;
    toastGj8.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
