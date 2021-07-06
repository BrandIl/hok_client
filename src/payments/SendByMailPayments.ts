import { stringify } from "query-string";
import { fetchUtils } from "react-admin";

export const genarte = async (filter: any) => {
  try {
    debugger
    const httpClient = fetchUtils.fetchJson;
    const apiUrl = `http://localhost:4000/api/reports?${stringify(filter)}`;
    // const headers = new Headers({ Accept: 'application/pdf' });
    const res = await httpClient(`${apiUrl} `, {
      method: "POST",
      // headers
    })

    console.log(res);
    alert(`הדוח נוצר בהצלחה!`);

  } catch (error) {
    console.log(error);

    alert(`ארעה שגיאה!`)
  }

};


