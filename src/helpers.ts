import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const moveToIndex = (
  direction: boolean,
  currentIndex: number,
  lastIndex: number,
) => {
  if (direction) {
    return currentIndex < lastIndex ? currentIndex + 1 : currentIndex;
  }
  return currentIndex >= 1 ? currentIndex - 1 : currentIndex;
};

export const exportToPdf = () => {
  const input = document.getElementById('app');
  const w = input?.offsetWidth;
  const h = input?.offsetHeight;

  if (input && w && h) {
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('l', 'px', [w, h]);
      pdf.addImage(imgData, 'JPEG', 0, 0, w, h);
      pdf.save('editable-slides.pdf');
    });
  }
};
