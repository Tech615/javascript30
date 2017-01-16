    const links = document.querySelectorAll('a');
    const highlight = document.createElement('span');

    highlight.classList.add('highlight');
    document.body.append(highlight);

    function hilightLink() {
      const linkBox = this.getBoundingClientRect();
      const coords = {
        width: linkBox.width,
        height: linkBox.height,
        top: linkBox.top + window.scrollY,
        left: linkBox.left + window.scrollX
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    links.forEach(a => a.addEventListener('mouseenter', hilightLink));
