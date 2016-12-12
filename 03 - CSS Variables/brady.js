const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const unit = this.dataset.unit || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // This could be improved... currently changes for mouseover instead of just dragging
