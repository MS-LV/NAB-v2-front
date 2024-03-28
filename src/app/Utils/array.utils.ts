import { Observable, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx';
export function excelDataPrepare(data: string[][], fields: string[]): object[] {
  const result: object[] = [];
  data = data.filter(item => item.length > 0);
  fields = fields.map(v => v.toLocaleLowerCase());
  const header = data.shift()?.map(v => v.toLowerCase());
  const isHasFields = fields.every(v => header?.includes(v));
  if (!isHasFields) {
    return [];
  }
  data.forEach(doc => {
    const line: any = {};
    header?.forEach((title, index) => {
      line[title] = doc[index];
    });
    result.push(line);
  });
  return result;
}

export function parseExcel(file: File): Observable<any[][]> {
  const reader: FileReader = new FileReader();
  reader.readAsBinaryString(file);
  return new Observable((subs: Subscriber<any[][]>) => {
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });
      subs.next(data);
    };
  });
}
