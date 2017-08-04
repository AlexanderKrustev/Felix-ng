import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http"
import 'rxjs/add/operator/toPromise'
import {Port} from "./Port"



const url: string = "http://localhost:22064/api/Ports";



@Injectable()
export class PortsService{
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ){}

  updateHeader(){
    this.headers.append('Authorization', 'Bearer x6-Y7_JI7Uh3FG1d-AiPIonedKF-JR41Mj1VrQ9XPCwYcVI4wOBucP8-9FppVNm04GUFkcIfxmHvnok_uZx82SIPoGBtdYOYXN0rDvECrx9y8EooepoyB-KZYk5WsC_m4wMXTQFJQ4a1s3U96Fb0kVcQqJNRH30_oCCvoSUqOWu9vmgyG3FuIhUGYxDg3-UqMSKkJP6fx1utk_nDkRU29jEoEeSUrhbrJ5jKUc8sUb2ccCrGoUYPCSK8lB7b7vbtTvpnkJZPum1z-AUEbQ8_31qgX3pt9sMu0XFVhQOoPmp_8Zj5bQm5e8W9XfPbTOrDQjpC4wGWYtDcAt3jNCvRbVMgl1IyUWkaK8GEme0UtlJru8Zow6A0kPlSZLM-oD86QBIxGZCznnx3ofmRo9qxoUW_UBJ2WDsVbnBkcYTKPjN3IaMqmKlf0wxlmxuP1PZRDAHplWmd4hm1nGnzXNHrw5nCTuUh0t-6aSvmheJ_2-ITN8Bb3Mhc3Pp8HVR62gUg');
  }




  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  get(): Promise<Array<Port>> {
     this.updateHeader();

    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(resp => resp.json() as Array<Port>)
      .catch(err => { console.log(err); return new Array<Port>()});
  }

  create(obj:Port): Promise<Port> {
    return this.http
      .post(url,  JSON.stringify(obj),{headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Port)
      .catch(this.handleError);
  }

  deleteById(id:string): Promise<Port> {
    return this.http
      .delete(url+'/'+id, {headers: this.headers} )
      .toPromise()
      .then(res => console.dir(res))
      .catch(this.handleError);
  }

}
