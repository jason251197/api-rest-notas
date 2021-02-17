import jsPDF from "jspdf";
import autoTable, { UserOptions } from "jspdf-autotable";

export interface IReport {
  title: string;
  headers: Array<string>;
  data: Array<Array<Object>>;
  name: string;
}

export const ReportPDF = (report: IReport) => {
  const unit = "pt";
  const size = "A4";
  const orientation = "portrait";

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);

  let content: UserOptions = {
    startY: 50,
    head: [report.headers],
    body: report.data,
    headStyles: { halign: "center"},
    columnStyles: { 0: { halign: "center" }, 1: { halign: "center" }, 2: { halign: "center" }, 3: { halign: "center" }, 4: { halign: "center" }, 5: { halign: "center" }, 6: { halign: "center" }, 7: { halign: "center" }, 8: { halign: "center" }, 9: { halign: "center" }, 10: { halign: "center" }},
    margin: { top: 10 },
  };

  doc.text(report.title, marginLeft, 40);
  autoTable(doc, content);
  doc.save(`${report.name}.pdf`);
};
