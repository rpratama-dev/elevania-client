// A function to detect if the content is empty
export default function parseEditorHtml(content) {
  const text = content
    .replaceAll('&nbsp;', '')
    .replaceAll(' ', '')
    .replaceAll('<p>', '')
    .replaceAll('</p>', '')
    .trim();
  return text.length < 1;
}
