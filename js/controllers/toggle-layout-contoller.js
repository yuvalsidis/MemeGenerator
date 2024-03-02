function toggleLayout(layout) {
    const mainContent = document.querySelector('.main-content');
    const galleryContent = document.querySelector('.gallery');
    const editorContent = document.querySelector('.main-editor');

    if (layout === 'gallery') {
        mainContent.style.display = 'none';
        galleryContent.style.display = 'block';
        editorContent.style.display = 'none';
    } else if (layout === 'editor') {
        mainContent.style.display = 'block';
        galleryContent.style.display = 'none';
        editorContent.style.display = 'block';
    }
}